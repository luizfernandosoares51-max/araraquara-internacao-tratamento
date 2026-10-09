<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep each researched local city page in an explicit route backed by shared rendering and city-specific editorial data, so URLs stay stable without homogenizing content.
- Render new editorial articles through the shared blog article shell while keeping route-specific copy and metadata in each route, so presentation stays consistent without homogenizing content.
- Use opt-in illustrated section rendering for long-form articles without changing the existing article shell, so alternating editorial imagery stays isolated from other published articles.
- Keep the blog's existing article inventory in one typed editorial catalog and render topic navigation with all article links in initial HTML, so categories improve discovery without empty archives or interaction-only indexing.
- Keep the global welcome assistant session-only, with its model, safety instructions, and credentials behind the server chat endpoint, so visitor conversations are never persisted or exposed.
- Keep public-page imagery in the shared visual asset catalog and use conceptual AI imagery rather than documentary facility photos, so visual representation stays consistent and does not imply unverified facts.
- Keep infrastructure diagnostic pages as standalone explicit routes excluded from the sitemap, so controlled delivery tests do not change existing city pages or discovery paths.
- Mount floating WhatsApp once in the root layout and share safe-area positioning with the assistant; page-level floating duplicates must not be added, so contact controls stay consistent across routes.
- Keep the family orientation guide isolated on the Home with typed, deterministic educational journeys and in-memory navigation only; use existing city routes and a verified source catalog, so visitor answers never require external processing or persistence.
