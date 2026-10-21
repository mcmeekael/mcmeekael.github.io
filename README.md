# McMeekael — Bass Guitarist Website

A responsive, static website for advertising McMeekael, accepting booking enquiries, and directing bass guitar tutorial enquiries to **09156381050**. The site uses the supplied photos and is ready for GitHub Pages with the custom domain `mcmeekael.com`.

## Website files

- `index.html` — page content and sections
- `styles.css` — responsive visual design
- `script.js` — photo gallery and mobile navigation
- `assets/` — all 56 supplied photos, copied into the site
- `CNAME` — custom domain configuration for GitHub Pages

No build process or package installation is required.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `mcmeekael-website`.
2. Extract this ZIP on your computer.
3. Upload the **contents** of the extracted `mcmeekael-website` folder to the repository's root. Make sure `index.html`, `CNAME`, `styles.css`, `script.js`, and `assets/` are at the root level—not inside an extra nested folder.
4. Commit the files to the `main` branch.
5. In the repository, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
7. In the Pages **Custom domain** field, enter `mcmeekael.com` and save if GitHub has not already picked up the included `CNAME` file.
8. At the domain registrar where `mcmeekael.com` was purchased, configure DNS:
   - For the apex/root domain (`mcmeekael.com`), add these four A records pointing to GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Optionally add AAAA records for IPv6 using GitHub's current Pages documentation.
   - For `www`, add a CNAME record pointing to your GitHub Pages hostname, usually `YOUR-GITHUB-USERNAME.github.io` (replace with your actual username; do not include a repository name).
   - Remove conflicting A/AAAA/CNAME records for the same host if your DNS provider requires it.
9. Allow DNS to propagate. In **Settings → Pages**, enable **Enforce HTTPS** when the option becomes available.

GitHub Pages DNS details can change; confirm the current instructions at https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages before editing DNS.

## Contact and tutorial details

- General contact: `091690876667`
- General contact: `09071198516`
- Bass tutorial enquiries: `09156381050`

The website's call links use the provided phone numbers. WhatsApp links are formatted for Nigeria's country code (`+234`) and tutorial/contact enquiries go to `09156381050`. Check that this number is registered on WhatsApp before relying on those links.

## Before launch

- Confirm the domain `mcmeekael.com` has been purchased and you control its DNS.
- Confirm the contact numbers and preferred WhatsApp number.
- Review the photos and website text.
- If you want booking details such as location, performance rates, social media profiles, or tutorial pricing displayed, add them to `index.html`.
