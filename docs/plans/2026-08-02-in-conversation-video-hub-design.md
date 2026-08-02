# In Conversation: video hub + ACF-backed video CMS

**Date:** 2026-08-02
**Status:** Approved (brainstormed and validated section by section)
**Goal:** Rebuild `/in-conversation` as a YouTube-style video hub with four sections (Interviews, Podcasts, Talks & Panels, Others), each showing the latest 4 videos with a link to its own archive page. Videos play in place. Content is managed in WordPress through a new Videos post type with ACF fields.

## Decisions

- **Platforms:** YouTube + Spotify. YouTube thumbnails derive from the video ID; Spotify episode cover art comes from Spotify's public oEmbed endpoint (fetched server-side, cached). Cards look identical across platforms.
- **Playback:** click-to-play in place. Thumbnail facade swaps to `youtube-nocookie` embed or Spotify's episode player only on click. Nothing loads up front.
- **Layout:** 4 columns desktop, 2 tablet, 1 mobile. Max 4 latest per section on the hub; "View all" links to `/in-conversation/{interviews|podcasts|talks-and-panels|others}` archives (one shared template, all videos newest first, no pagination until ~40+ items).
- **Hub hero, "See Speaking" line, and CtaSection stay unchanged** (house rule: every page routes to the Scan).
- Empty sections do not render.

## Frontend

- `VideoItem` type: title, section, host, date (publish date = ordering + year display), url, and derived platform/embedSrc/thumbnail. Replaces `ConversationItem`.
- `VIDEO_SECTIONS` shared definition file drives hub order, archive routes, and ACF select choices — one source of truth for slugs.
- `getVideos()` joins the ContentSource interface: WPGraphQL first, local seed fallback (the six old placeholder conversations render as quiet unplayable "link coming" cards). Dev no-store; prod revalidate 300s. Spotify oEmbed cached 24h.
- `VideoCard` (client): thumbnail button (aria-label "Play: {title}") → iframe swap on click. `VideoGrid` shares the responsive grid.
- `next.config.ts`: allow `i.ytimg.com`, `*.scdn.co`, `*.spotifycdn.com` image hosts.

## WordPress

- **Videos post type** (`tac_video`, REST base `tac-videos`, GraphQL `conversationVideo(s)`) registered in a new mu-plugin `tac-videos.php` uploaded over SFTP — code, not clicks, because the frontend depends on exact GraphQL/REST names. Title-only supports; headless (no archive/rewrite).
- **ACF field group** `group_tac_video` (Local JSON in `wp-content/acf-json/`, load path added by the mu-plugin so it is theme-independent): section select (slugs match `VIDEO_SECTIONS`), video URL (YouTube or Spotify), host/show text, optional custom thumbnail image. `show_in_rest` on.
- GraphQL exposure via `register_graphql_field` in the mu-plugin reading post meta (same pattern as the existing `tac*` article fields) — no dependency on the WPGraphQL-for-ACF plugin.
- Client workflow: Videos → Add New → title, link, section, host → Publish. Auto thumbnail; custom image only as an override. Backdating slots videos into history.

## Rollout

1. Design doc committed.
2. Frontend with seed fallback; verify responsive at mobile/tablet/desktop in preview.
3. mu-plugin + ACF JSON over SFTP (Local JSON groups are active immediately; the wp-admin Sync click just makes them editable in the ACF UI).
4. End-to-end proof: create one real video via REST (the Speaking-page YouTube talk, Talks & Panels), confirm hub + archive render it from the CMS.
5. Commit + push — GitHub CI/CD takes it to production.
6. Client adds real videos in wp-admin.
