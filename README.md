# Emeka Abanifi · Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

The source code for [emekaabanifi.dev](#) — the personal portfolio of **Emeka Abanifi**, a senior full stack software engineer in Atlanta, GA with 14 years of experience designing and shipping multi-tenant SaaS products for contact-center, healthcare, and workload-automation domains.

- **Stack:** TypeScript, JavaScript, Angular, React, Node.js, .NET Core, Java, Python
- **Cloud & DevOps:** GCP, AWS, Azure, Docker, Kubernetes, Terraform
- **Data:** MongoDB, PostgreSQL, Elasticsearch, Redis, Firebase, MySQL

## Contact

- Email: [byteharborhq@gmail.com](mailto:byteharborhq@gmail.com)
- Location: Atlanta, GA

## Local development

1. Install [Node.js](https://nodejs.org/) (LTS recommended).

   ```bash
   node -v
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm start
   ```

   The site is served at [http://localhost:3000](http://localhost:3000) and reloads on file changes.

4. Run the test suite:

   ```bash
   npm test
   ```

5. Produce a production build:

   ```bash
   npm run build
   ```

   The optimized bundle is emitted to `build/`.

## Project layout

```
src/
  App.tsx              # Root component, theme toggle
  components/
    Navigation.tsx     # Sticky top bar with dark/light toggle
    Main.tsx           # Hero section (name, title, socials)
    Expertise.tsx      # Frontend / Backend / Cloud expertise cards
    Timeline.tsx       # Career history + education
    Project.tsx        # Featured production work
    Contact.tsx        # Contact form and direct links
    Footer.tsx         # Socials + signature
  assets/
    images/            # Mockups and backgrounds
    styles/            # SCSS modules per component
```

## Deployment

The site is a static Create React App build, so any static host works (Netlify, Vercel, Render, GitHub Pages, S3/CloudFront, etc.).

For GitHub Pages, set `homepage` in `package.json` to your deployment URL and run:

```bash
npm run deploy
```
