# Fahad MD Akramul Islam — portfolio

An Astro static portfolio built from Fahad's local `Fahad_Portfolio.html` source. The original HTML stays local and ignored by Git. Edit `src/data/projects.ts` to update projects, credits, evidence, and public links; edit `src/pages/index.astro` and `src/pages/about.astro` for the home and About copy; edit `src/styles/global.css` for the visual system. Published images live in `public/media/`.

## Run locally

Use Node.js 24 (Astro requires at least Node.js 22.23.4). The lockfile uses npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The default base path is `/personal-portfolio/`, so local development serves at `http://127.0.0.1:4321/personal-portfolio/`. Set `SITE_URL` and `BASE_PATH` for a different GitHub Pages owner/repository. For a username repository, use `BASE_PATH=/` and `SITE_URL=https://username.github.io`. The Pages workflow currently targets `fahadakramul/personal-portfolio` on `main` and deploys the `dist` artifact with the official Pages actions.

## Source and design notes

- The original single-page HTML repeated similar cards and anchors for projects. This version uses a clear Work index and separate case studies, with varied media size and pacing.
- Visual references inspected: [Mirko Romanelli on Awwwards](https://www.awwwards.com/sites/mirko-romanelli) and [the Mirko Dribbble shot](https://dribbble.com/shots/25273962-Industrial-Designer-Portfolio-Website-for-Mirko-Romanelli) for spacious project progression; [Roberts Sandro on Dribbble](https://dribbble.com/shots/26861759-Roberts-Sandro-Personal-Portfolio-Website) for typography-led identity. The [Dribbble portfolio collection](https://dribbble.com/tags/personal-portfolio-website) and [Awwwards portfolio collection](https://www.awwwards.com/websites/portfolio/) helped calibrate scale and editorial rhythm. The design, copy, and compositions are original to Fahad's work.
- The palette comes from the supplied Naogaon map and studio images. Instrument Serif and Geist Sans are bundled with the site.
- The 19,485 ha Naogaon and 4,751 ha Manda figures, geographic scope, method and credits were checked against the supplied 2048×1447 map board. The map is displayed at full source resolution in the viewer.
- Only the source HTML was present in the folder. I extracted and visually reviewed its 13 embedded images; the public site uses 12 unique images and derived sizes because the map board appeared twice. There were no separate original photographs, app screenshots, PDFs, NagarBondhu screenshots, or survey report in the folder. The original HTML, extraction script, temporary contact sheet, and working notes are excluded from Git. Paid lessons and internal admin dashboards are not included.
- LinkedIn and Facebook profile URLs came from the supplied HTML. Other social handles were not added without cross-link evidence. Facebook posts and LinkedIn pages can be login-gated for visitors; direct links remain available. The NagarBondhu demo may be temporarily unavailable on its external host.
- All claims and team credits are from the supplied HTML and brief unless attributed to the map board. The 2023 award is described as a nomination. No email address is published because the source did not mark one for public contact.

## GitHub Pages

The workflow follows [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) and [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): checkout, install, check, build, upload artifact, deploy with `pages: write` and `id-token: write`. Configure the repository's Pages source to **GitHub Actions** before the first deployment.
