# Fahad MD Akramul Islam — portfolio

An Astro static portfolio built from Fahad's local `Fahad_Portfolio.html` source. The original HTML stays local and ignored by Git. Edit `src/data/projects.ts` for project claims and links, `src/components/HomeV2.astro` for homepage content, and `src/styles/home-v2.css` for the homepage design. Published media lives in `public/media/`.

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
- The [Boineelo portfolio reference](https://boineelomoyo.github.io/Portfolio/) was inspected through its Home, Proficiency, Projects, Resume, and Contact sections. This site uses a similar navy/cyan visual rhythm, project panels, skill cards and resume tabs with content and composition specific to Fahad. Plus Jakarta Sans is bundled with the site. The F/A logo is an original SVG monogram.
- The homepage cycles through three verified role labels, reveals sections as visitors scroll, and briefly animates featured-work selection. These effects stop or disappear when reduced motion is requested; project links and content remain available without JavaScript.
- The 19,485 ha Naogaon and 4,751 ha Manda figures, geographic scope, method and credits were checked against the supplied 2048×1447 map board. The map is displayed at full source resolution in the viewer.
- The source HTML provided 13 embedded images. The homepage has one personal portrait, converted from the supplied JPEG to PNG without changing its dimensions. App screens come from the supplied `Nagarbondhu mockup.zip` (nine screens) and `Class interface app mockup.zip` (four screens). The 90-second NagarBondhu project video is the supplied `NagarBondhu_Final_v4_upload.mp4`, published locally as `nagarbondhu-story.mp4`. The Flyover Paradox case study includes the complete 3-minute-6-second film, transcoded from the supplied 4K original to a 1080p web copy. The iPad Giveaway is the lead campaign, with 11.11 retained as a secondary example. Public campaign stills, demo screenshots, and exact crops from the original map board remain on the case-study pages. The original HTML, ZIP files, 4K video, temporary screenshots, and working notes are excluded from Git. Paid lessons and internal admin dashboards are not included.
- LinkedIn and Facebook profile URLs came from the supplied HTML. X and Instagram URLs were supplied directly by the user. Facebook posts and LinkedIn pages can be login-gated for visitors; direct links remain available. The NagarBondhu demo may be temporarily unavailable on its external host.
- All claims and team credits are from the supplied HTML and brief unless attributed to the map board. The 2023 award is described as a nomination. No email address is published because the source did not mark one for public contact.

## GitHub Pages

The workflow follows [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) and [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): checkout, install, check, build, upload artifact, deploy with `pages: write` and `id-token: write`. Configure the repository's Pages source to **GitHub Actions** before the first deployment.
