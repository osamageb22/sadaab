# Md. Sadaab Hassan — Academic Portfolio

A responsive, one-page academic and research portfolio built with React, TypeScript and Vite. It is designed for free deployment through GitHub Pages.

## 1. Included in this repository

- Research-led homepage and academic profile
- About, research interests, research experience, selected projects and education
- Manuscript-stage outputs and conference contributions, with their statuses clearly labelled
- Technical skills, research training, memberships, service and distinctions
- Email, ORCID and LinkedIn links
- Downloadable public-facing CV (`public/cv.pdf`)
- Responsive navigation, keyboard skip link, reduced-motion support and subtle scroll reveals
- GitHub Actions workflow for automatic GitHub Pages deployment

The content is maintained centrally in `src/data/profile.ts`, so most routine updates do not require editing the page components.

## 2. Requirements

- Node.js 22.12 or later (Node.js 22 is recommended)
- npm
- A GitHub account

## 3. Run the website locally

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Vite prints a local URL (normally `http://localhost:5173`). Open it in your browser.

To test the production version locally:

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` directory. Do not upload `dist/` as the source repository; GitHub Actions builds it automatically.

## 4. Update personal and academic information

Open:

```text
src/data/profile.ts
```

Edit the relevant fields:

- `heroIntro` — short introduction on the homepage
- `about` — academic biography paragraphs
- `researchInterests` — research themes and their CV-supported evidence
- `education` — degrees, periods, results, thesis/project titles and study areas
- `experience` — roles, institutions, dates and responsibilities
- `projects` — project titles, descriptions and status labels
- `manuscripts` — manuscript titles, author lists and status labels
- `conferenceContributions` — conference titles, organizers, authors and event links
- `training` — professional and research training
- `skills` — methods, instruments, software and research tools
- `affiliations`, `distinctions`, `languages` — memberships, service, awards and language information
- `email`, `orcid`, `linkedin` — contact and academic profile links

Keep status labels accurate. In particular, do not change a manuscript to “published” until it has actually been published, and do not add a DOI or research metric unless it can be verified.

## 5. Replace the profile photograph

Replace this file with your preferred professional portrait:

```text
public/assets/profile.jpg
```

Keep the filename `profile.jpg`, or update the image path in `src/App.tsx`. A portrait with a vertical aspect ratio works best. Use an image you have permission to publish.

## 6. Replace or update the downloadable CV

Replace:

```text
public/cv.pdf
```

with your latest public-facing academic CV. Keep the filename `cv.pdf` so the download buttons continue to work.

**Privacy check before publishing:** GitHub Pages websites are public. The included CV is a public-facing copy with the residential address, date of birth, personal phone number and referees’ direct contact details removed. Review any replacement CV carefully before uploading it. Avoid publishing private residential details or another person’s private contact information.

## 7. Add a publication or research project

Edit the appropriate array in `src/data/profile.ts`:

- Add a project to `projects`.
- Add a manuscript to `manuscripts` and use a precise status such as `Published`, `Accepted`, `Under review`, `Submitted manuscript` or `Manuscript in preparation` only when accurate.
- Add a conference contribution to `conferenceContributions` with the correct event URL if available.

Optional project images can be placed in `public/projects/`, publication PDFs in `public/publications/`, and research materials in `public/research/`. Only add material you have permission to share. If you add links or images, also update the relevant data entry and component.

## 8. Update academic and social links

Edit `orcid`, `linkedin` and `email` near the top of `src/data/profile.ts`. The website currently includes only the ORCID and LinkedIn profiles listed in the supplied CV. Add Google Scholar, ResearchGate, GitHub or institutional-profile links only after confirming the exact public URL.

## 9. Publish through GitHub Pages (free)

1. Sign in to GitHub and create a **new public repository**. A suitable name is `sadaab-hassan-portfolio`.
2. Upload the contents of this project folder to the repository root. The `.github` directory must be included.
3. Commit the files to the `main` branch.
4. Open the repository on GitHub and go to **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Open the **Actions** tab. The workflow named **Deploy academic portfolio to GitHub Pages** will build and publish the website after the push.
7. When the workflow completes successfully, GitHub will show the published website URL under **Settings → Pages**.

The Vite project uses `base: './'`, a relative asset base that supports both repository URLs (for example, `https://USERNAME.github.io/REPOSITORY/`) and user-site roots. You do not need to rename files or edit the base path when using the suggested repository name.

For later changes, edit the source files and push the commit to `main`; the deployment workflow runs again automatically.

## 10. Custom domain (optional)

A custom domain is not required. If you later connect one, follow GitHub's current Pages custom-domain instructions, add the domain in **Settings → Pages**, and configure the DNS records with your domain provider. Add a `CNAME` file in `public/` only after you own and configure the domain. A canonical URL and sitemap can then be added to `index.html` and `public/` using the final website address.

## 11. Project structure

```text
sadaab-hassan-academic-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   └── profile.jpg
│   ├── projects/
│   ├── publications/
│   ├── research/
│   ├── cv.pdf
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SectionHeading.tsx
│   │   └── TagList.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 12. Accuracy and items to review before publication

This site is based on the supplied three-page CV. It intentionally does not invent publication links, DOIs, citation counts, Google Scholar/ResearchGate/GitHub profiles, funding awards or research findings. The manuscript and project statuses follow the wording in that CV.

Please review these items against your latest records before making the site public:

- Confirm the current M.Sc. status, latest semester result and thesis status. The supplied CV describes the degree as ongoing and gives the first-semester CGPA.
- Confirm whether the two current projects remain ongoing and whether any results, software, datasets or individual contributions can now be added.
- Confirm the present status of the manuscript listed as submitted and the review manuscript listed as ready for submission.
- Confirm whether the membership periods marked “Present” are still current.
- Add any newer awards, presentations, publications or academic profile links only after verifying them.

## 13. Free hosting and software

The source code is built locally or by GitHub Actions and published as static files on GitHub Pages. No paid hosting, database, server or API key is required.
