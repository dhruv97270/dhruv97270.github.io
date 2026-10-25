# Dhruvkumar Prajapati – Cybersecurity Portfolio

A one-page portfolio site for recruiters and hiring managers. It's built with plain HTML, CSS and JavaScript only. There are no frameworks, trackers, cookies, forms or external scripts.

## Project structure

```
index.html        All page content. Big comments mark each section.
css/styles.css    Colours, fonts and layout. Accent colour is at the top.
js/script.js      Mobile menu, "View project" toggles, footer year.
assets/           Resume PDF, favicon, link-preview image, screenshots.
404.html          "Page not found" page for GitHub Pages.
README.md         This file.
```

## Run it locally

Double-click `index.html` to open it in your browser. That's it.

## Editing guide

Open `index.html` in any text editor (VS Code is free). Search for these comments:

| To change | Search for |
|---|---|
| Name, headline, intro, hero buttons | `MY NAME / HERO` |
| About section | `ABOUT ME` |
| Projects | `PROJECTS` |
| Skills | `SKILLS` |
| Certifications | `CERTIFICATIONS` |
| Email / LinkedIn / GitHub | `CONTACT DETAILS / SOCIAL LINKS` (also `SOCIAL LINKS (hero)`) |
| Page title and Google / link-preview text | `SEO` |

### Add a project
1. Copy one whole `<article class="project"> ... </article>` block.
2. Paste it after the last project.
3. Change the text. Give the button and panel a new id (e.g. `p4-details` in **both** `aria-controls="p4-details"` and `id="p4-details"`).
4. To add a GitHub, demo or documentation link, put this inside `card-actions`:
   `<a class="btn btn-small" href="URL" target="_blank" rel="noopener noreferrer">View GitHub</a>`

### Update skills
Add or remove `<li>Skill</li>` lines inside a skill group. Only list things you can talk about in an interview.

### Add a certification
Copy the `<li>` under Certifications. For one you're still studying for, uncomment the "In progress" block. Never list an unfinished cert as earned.

### Replace images / resume
- Resume: replace `assets/Dhruvkumar_Prajapati_Resume.pdf` with a new file of the **same name**. The current one leaves your phone number off on purpose.
- Screenshots: put them in `assets/` and add `<img src="assets/name.png" alt="What the screenshot shows">` inside a project's details. Blur any IPs, hostnames or personal data first.
- Link-preview image: `assets/og-image.png` (1200×630).

## Publish free on GitHub Pages

1. On GitHub, create a **public** repository named exactly `dhruv97270.github.io`.
2. Upload every file and folder here into the root of that repository (or push with git).
3. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`** and save.
4. After about a minute the site is live at **https://dhruv97270.github.io**.

Any later change you commit goes live automatically. You can add a custom domain later under the same Pages settings.
