# WordPress CMS integration: one.com as production backend

**Date:** 2026-08-01
**Status:** Approved (brainstormed and validated section by section)
**Goal:** Connect Claude Code to the one.com-hosted WordPress so it can read and write content, manage ACF field values, and propose ACF field groups. Then make that WordPress the production CMS for the autonomy-code site, replacing LocalWP and unblocking the Vercel deploy.

## Context

- The site already reads articles through WPGraphQL (`src/content/wp/index.ts`) against a LocalWP install, selected via `WORDPRESS_API_URL`. Draft outlines and all other content types come from the local seed, which also serves as the fallback when WordPress is unreachable.
- The one.com WordPress already exists, has content and plugins, and runs **ACF Pro**.
- SSH/SFTP access to the one.com hosting is available.

## Decision

**Approach A: REST API + Application Password for content, ACF Local JSON over SFTP for field definitions, WPGraphQL for the site's read path.**

Rejected alternatives:

- **WordPress MCP plugin** (Automattic): tighter tooling integration, but young, adds plugin attack surface, and still cannot create ACF field groups.
- **Everything over SSH + WP-CLI**: most control, most friction; one.com's SSH is restricted and WP-CLI availability is uncertain. SSH remains a complementary channel, not the primary one.

## 1. Access layer

- Dedicated WordPress user `claude-editor` with the **Editor** role. Can create and edit posts, pages, and media; cannot install plugins, manage users, or change settings.
- An **Application Password** on that user (WordPress core, 5.6+) is the API credential: revocable independently, no wp-admin browser access.
- Credentials live only in `autonomy-code/.env.local` (gitignored):

  ```
  WP_API_USER=claude-editor
  WP_API_APP_PASSWORD=xxxx xxxx xxxx xxxx
  ```

- Claude calls `https://<wp-domain>/wp-json/wp/v2/...` over HTTPS with Basic auth: posts, media uploads, categories, featured images.
- ACF field **values**: enable "Show in REST API" per field group. Fields then read/write under the `acf` key on post responses.
- Known one.com risk: shared hosts sometimes strip the `Authorization` header. Fix is the standard `.htaccess` rewrite line, placed over SFTP if needed.

## 2. Field definitions: ACF Local JSON

- The active theme gets an `acf-json/` folder. ACF treats JSON files there as the source of truth for field groups.
- Workflow: Claude writes or edits field-group JSON (names, types, locations, plus `show_in_rest` and `show_in_graphql` with `graphql_field_name` per group) and uploads it over SFTP. ACF then shows **"Sync available"** in wp-admin; the owner reviews and clicks Sync. No structural change lands without that click.
- Edits made in wp-admin write back to the same JSON files, so schema never drifts; Claude reads the folder over SFTP to know the current schema.
- SFTP credentials are created in one.com's **SSH and FTP** panel and stored in `.env.local`.
- Caveat: `acf-json/` lives in the theme; if the theme ever changes, the folder must move with it.

## 3. Production swap and migration

1. Install **WPGraphQL** and **WPGraphQL for ACF** on the one.com WordPress (wp-admin plugin installer).
2. Export the article field group (subtitle, read time, hero image) from LocalWP as JSON; place it in the one.com `acf-json/`; sync. Keeping identical `graphql_field_name`s (`tacSubtitle`, `tacReadTime`, `tacHeroImage`) means the existing GraphQL query works unchanged.
3. Recreate the pillar categories via REST.
4. Migrate each published article: pull from LocalWP via GraphQL, re-create on one.com via REST (body, excerpt, category, featured image uploaded to the new media library, ACF values). Verify each post after creation.
5. Flip `WORDPRESS_API_URL` to `https://<wp-domain>/graphql` in `.env.local`, and later in Vercel's environment settings.
6. Add the one.com domain to the allowed image hosts in `next.config.ts` so `next/image` serves WordPress media.
7. The local-seed fallback in `src/content/wp/index.ts` stays: builds never break if WordPress is down.

Caution: one.com's performance cache can serve stale API responses. If observed, exclude `/graphql` and `/wp-json` from caching in the control panel.

## 4. Security ground rules

- All credentials in `.env.local` only; never in code or commits.
- Editor role limits blast radius to content.
- Application Password and SFTP login are independently revocable.
- Field schema changes always pass through the human Sync click in wp-admin.

## Rollout order

| # | Who | Step |
|---|-----|------|
| 1 | Owner | Create `claude-editor` (Editor role) in wp-admin; generate Application Password |
| 2 | Owner | Create SFTP credentials in one.com's SSH and FTP panel |
| 3 | Owner | Add both credentials to `.env.local` |
| 4 | Claude | Verify REST access; fix `.htaccess` Authorization header if stripped |
| 5 | Owner | Install WPGraphQL + WPGraphQL for ACF |
| 6 | Claude | Place article field-group JSON in `acf-json/`; owner clicks Sync |
| 7 | Claude | Migrate categories, articles, media, ACF values; verify |
| 8 | Claude | Flip `WORDPRESS_API_URL`, update image hosts, test locally against one.com |
| 9 | Owner | Set `WORDPRESS_API_URL` in Vercel at deploy time |

Steps 1–3 are the only prerequisites. Everything after is incremental and reversible; LocalWP remains untouched as a backup.

## Open items

- The one.com WordPress domain / URL (fills `<wp-domain>` above).
- Whether one.com's restricted SSH permits WP-CLI (nice to have, not required).
- Vercel deploy itself (separate effort; depends on this migration).
