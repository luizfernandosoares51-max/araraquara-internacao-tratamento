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
- Keep the global welcome assistant session-only, with its model, safety instructions, and credentials behind the server chat endpoint, so visitor conversations are never persisted or exposed.
