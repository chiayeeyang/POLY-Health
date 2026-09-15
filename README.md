# Poly Health — GitHub Pages

This package contains the current Poly Health website, including the revised diagnosis page and the symptom questionnaire.

## Deploy

1. Extract the ZIP on your computer.
2. Add the CONTENTS of this folder to the root of your GitHub repository on the `main` branch. Include the hidden `.github` folder. Do not upload the ZIP itself or nest this folder inside your repository.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open **Actions → Deploy Poly Health to GitHub Pages → Run workflow**. Later pushes to `main` deploy automatically.
5. Open the website URL displayed by the completed deployment.

GitHub Desktop or Git can add all files, including `.github`. If you use GitHub's browser uploader, make sure `.github/workflows/deploy.yml` is included; you may need to create that file using Add file → Create new file.

## Files

- `site/`: editable HTML, CSS, JavaScript, and original image assets.
- `scripts/build-pages.py`: creates `_site/` and adjusts links for the repository path.
- `.github/workflows/deploy.yml`: builds and publishes the website.

No npm install, API key, or backend is required. Root sites, project sites, and custom-domain base paths are handled by the Pages configuration.

## Local preview

Run `python3 scripts/build-pages.py`, then `python3 -m http.server 8000 --directory _site`. Visit http://localhost:8000.

## Current functionality

The questionnaire summarizes three selected answers without medical diagnostic scoring; answers remain in page memory only. Newsletter signup and some recipe/article pages remain placeholders. Saved recipes and articles use browser session storage. Fonts load from Google Fonts.

GitHub Pages does not inherit the existing ChatGPT site's private access controls. Confirm your GitHub Pages visibility before publishing. The website includes the contact email and phone number supplied in the design.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
