import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/galaxyb-dark" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/emeka-abanifi-50880b285/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        <a href="mailto:byteharborhq@gmail.com" aria-label="Email"><EmailIcon/></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Emeka Abanifi · Built with React &amp; TypeScript</p>
    </footer>
  );
}

export default Footer;
