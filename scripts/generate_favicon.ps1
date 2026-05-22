Add-Type -AssemblyName System.Drawing

# Minimalist monogram: serif "E" in white on solid black.
$bgColor = [System.Drawing.ColorTranslator]::FromHtml("#000000")
$fgColor = [System.Drawing.Color]::White
$initials = "E"
$fontFamilyPreference = @("Garamond", "Georgia", "Cambria", "Times New Roman", "Serif")

function New-InitialsPng {
    param(
        [int]$Size,
        [string]$OutPath
    )

    $bmp = New-Object System.Drawing.Bitmap $Size, $Size, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $g.Clear([System.Drawing.Color]::Transparent)

    # Sharp square background.
    $brush = New-Object System.Drawing.SolidBrush $bgColor
    $g.FillRectangle($brush, 0, 0, $Size, $Size)
    $brush.Dispose()

    # Pick the first font family from preferences that's installed on this machine.
    $installed = New-Object System.Drawing.Text.InstalledFontCollection
    $available = $installed.Families | ForEach-Object { $_.Name }
    $fontFamilyName = "Serif"
    foreach ($name in $fontFamilyPreference) {
        if ($available -contains $name) { $fontFamilyName = $name; break }
    }
    $installed.Dispose()

    $fontStyle = [System.Drawing.FontStyle]::Regular
    $maxFontSize = $Size * 0.78
    $font = New-Object System.Drawing.Font $fontFamilyName, $maxFontSize, $fontStyle, ([System.Drawing.GraphicsUnit]::Pixel)

    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center

    # Shrink font if measured text exceeds the safe area.
    $maxWidth = $Size * 0.78
    $maxHeight = $Size * 0.92
    while ($true) {
        $measured = $g.MeasureString($initials, $font)
        $fits = ($measured.Width -le $maxWidth) -and ($measured.Height -le $maxHeight)
        if ($fits -or $font.Size -le 6) { break }
        $newSize = [Math]::Max(6, $font.Size - 1)
        $font.Dispose()
        $font = New-Object System.Drawing.Font $fontFamilyName, $newSize, $fontStyle, ([System.Drawing.GraphicsUnit]::Pixel)
    }

    $textBrush = New-Object System.Drawing.SolidBrush $fgColor
    $g.DrawString($initials, $font, $textBrush, (New-Object System.Drawing.RectangleF 0, 0, $Size, $Size), $format)
    $textBrush.Dispose()
    $font.Dispose()
    $format.Dispose()
    $g.Dispose()

    $bmp.Save($OutPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
}

function Write-IcoFromPngs {
    param(
        [string[]]$PngPaths,
        [string]$OutPath
    )

    $entries = @()
    foreach ($p in $PngPaths) {
        $bytes = [System.IO.File]::ReadAllBytes($p)
        $img = [System.Drawing.Image]::FromFile($p)
        $w = $img.Width
        $h = $img.Height
        $img.Dispose()
        $entries += [PSCustomObject]@{ Width = $w; Height = $h; Bytes = $bytes }
    }

    $headerSize = 6
    $dirEntrySize = 16
    $dirSize = $headerSize + ($entries.Count * $dirEntrySize)

    $ms = New-Object System.IO.MemoryStream
    $bw = New-Object System.IO.BinaryWriter $ms

    # ICONDIR
    $bw.Write([UInt16]0)   # reserved
    $bw.Write([UInt16]1)   # type = icon
    $bw.Write([UInt16]$entries.Count)

    $offset = $dirSize
    foreach ($e in $entries) {
        $wByte = if ($e.Width -ge 256) { 0 } else { [byte]$e.Width }
        $hByte = if ($e.Height -ge 256) { 0 } else { [byte]$e.Height }
        $bw.Write([byte]$wByte)
        $bw.Write([byte]$hByte)
        $bw.Write([byte]0)            # color count
        $bw.Write([byte]0)            # reserved
        $bw.Write([UInt16]1)          # color planes
        $bw.Write([UInt16]32)         # bits per pixel
        $bw.Write([UInt32]$e.Bytes.Length)
        $bw.Write([UInt32]$offset)
        $offset += $e.Bytes.Length
    }

    foreach ($e in $entries) {
        $bw.Write($e.Bytes)
    }

    $bw.Flush()
    [System.IO.File]::WriteAllBytes($OutPath, $ms.ToArray())
    $bw.Dispose()
    $ms.Dispose()
}

$publicDir = Join-Path $PSScriptRoot "..\public" | Resolve-Path
$tempDir = Join-Path $env:TEMP "favicon-$(Get-Random)"
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

$icoSizes = @(16, 32, 48, 64, 128, 256)
$icoPngs = @()
foreach ($s in $icoSizes) {
    $out = Join-Path $tempDir "icon-$s.png"
    New-InitialsPng -Size $s -OutPath $out
    $icoPngs += $out
}

Write-IcoFromPngs -PngPaths $icoPngs -OutPath (Join-Path $publicDir "favicon.ico")
New-InitialsPng -Size 192 -OutPath (Join-Path $publicDir "logo192.png")
New-InitialsPng -Size 512 -OutPath (Join-Path $publicDir "logo512.png")

Remove-Item -Recurse -Force $tempDir

Write-Host "Generated favicon.ico, logo192.png, logo512.png in $publicDir"
