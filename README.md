# Md. Sadaab Hassan — Academic & Research Portfolio

A responsive, dark-first academic portfolio built with plain HTML, CSS and JavaScript. It has **no build step, npm dependencies, paid hosting or backend**. It can be published directly with GitHub Pages from the repository root.

## 1. Project structure

```text
sadaab-hassan-academic-portfolio-v2/
├── index.html                  # Main page and section layout
├── favicon.svg                 # Browser tab icon
├── robots.txt                  # Search-engine crawling rules
├── .nojekyll                   # Prevents GitHub Pages Jekyll processing
├── README.md
└── assets/
    ├── css/
    │   └── style.css           # All layout, colours, responsive design and animation
    ├── js/
    │   ├── content.js          # Central profile data: bio, roles, research, projects, etc.
    │   └── main.js             # Renders content and handles navigation/theme/reveal effects
    ├── images/
    │   └── profile.jpg         # Profile photograph
    └── files/
        └── cv.pdf              # Public-facing CV download
```

## 2. Publish free with GitHub Pages

1. Create a **public** repository on GitHub, for example `sadaab-hassan-portfolio`.
2. Extract this ZIP on your computer.
3. Open the extracted folder. Select **all the files and folders inside it** (`index.html`, `assets`, `favicon.svg`, etc.).
4. Upload those items to the **top level (root)** of the GitHub repository. Do not upload the outer project folder as a nested folder. After upload, `index.html` must be visible beside the `assets` folder on the repository's Code page.
5. Commit the files to the `main` branch.
6. In GitHub, open **Repository → Settings → Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Select **Branch: `main`** and **Folder: `/(root)`**, then click **Save**.
9. Open the Pages section again after the deployment completes and use **Visit site**.

The address will usually look like:

`https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`

This static version does not need the Actions workflow from the previous React/Vite project. Remove the old `.github/workflows/deploy.yml` if you are replacing the previous Vite project completely, and make sure Pages is set to **Deploy from a branch → main → /(root)**.

## 3. Where to edit the website

| What you want to change | File |
|---|---|
| Name, biography, role, education, experience, research themes, projects, manuscripts, conferences, skills and training | `assets/js/content.js` |
| Website design, typography, colours, spacing, responsive/mobile layout and effects | `assets/css/style.css` |
| Page structure, section order, metadata and navigation | `index.html` |
| Menu, light/dark theme, scroll effects and display logic | `assets/js/main.js` |
| Profile photograph | `assets/images/profile.jpg` |
| Downloadable CV | `assets/files/cv.pdf` |

### Replace your profile photograph

Replace `assets/images/profile.jpg` with your preferred photograph. Keep the exact filename (`profile.jpg`) or update the image path in `index.html`. Use a clear, well-lit portrait and compress it before uploading so the website remains fast.

### Replace your CV

Replace `assets/files/cv.pdf` with your updated public-facing PDF, keeping the filename `cv.pdf`. The CV button and footer link already point to that path. Review the PDF before making it public; this package uses a public-facing copy with private residential and referee contact details removed.

### Update your academic details

Open `assets/js/content.js` in GitHub's editor or a code editor on your computer. The file begins with:

```js
window.portfolioData = {
  name: 'Md. Sadaab Hassan',
  // ...
};
```

Update the relevant fields. Keep the JavaScript object syntax valid: strings need quotes, items in arrays are separated by commas, and each object needs matching braces. Do not add claims, publication statuses, DOI numbers, findings or awards unless they are accurate and verified.

### Add another research project

Inside the `projects` array in `assets/js/content.js`, add an object with the same fields as the existing entries:

```js
{
  number: '05',
  status: 'Ongoing',
  category: 'Your research area',
  title: 'Your project title',
  description: 'A concise, factual description of the research question and scope.',
  contribution: 'Describe your own role only where it is documented.'
}
```

### Add a publication or conference presentation

Add an item to `manuscripts` or `conferenceContributions` in `assets/js/content.js`, following the fields used by existing entries. Use a publication link only when you have a real, accessible URL. Keep published, accepted, submitted and in-preparation work clearly distinguished.

## 4. Test locally

Because this is plain HTML/CSS/JavaScript, you can double-click `index.html` to open it in a browser. For a local web-server preview, Python is optional:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 5. Troubleshooting: blank or unstyled website

- **Blank page:** confirm `index.html` is at the repository root, not inside an extra nested folder.
- **No styling:** confirm `assets/css/style.css` exists and the folder is named exactly `assets/css` (case-sensitive).
- **No content:** confirm both `assets/js/content.js` and `assets/js/main.js` exist and are uploaded.
- **Broken photograph/CV:** confirm the filenames and exact paths under `assets/images` and `assets/files`.
- **404 / site not published:** confirm Pages is set to `Deploy from a branch`, `main`, and `/(root)`, and that the latest commit is on `main`.
- **Old version still visible:** hard-refresh the browser (Ctrl + Shift + R) and verify the newest commit was uploaded.

## 6. Custom domain later

You can add a custom domain from **Repository → Settings → Pages → Custom domain** after you own or control the domain. Follow GitHub's DNS instructions for the domain provider. Do not add a `CNAME` file until the custom domain is configured.

## 7. Notes on accuracy and privacy

The content is based on the supplied CV and the portfolio information previously organized from it. Manuscript stages are preserved as stated in the CV; no DOI, publication result, citation count or unsupported achievement has been invented. The public CV copy omits the residential address, date of birth, personal phone number and referees' direct contact details. Review all content and files before publishing because a public GitHub Pages website is visible to anyone.
