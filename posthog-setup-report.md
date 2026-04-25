# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Lucent skill registry. Here is a summary of all changes made:

- **`posthog-js`** and **`posthog-node`** packages were installed
- **`.env.local`** was updated with `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST`
- **`vite.config.ts`** — reverse proxy rules added for `/ingest`, `/ingest/static`, and `/ingest/array` to route PostHog traffic through the dev server
- **`src/routes/__root.tsx`** — `PostHogProvider` wraps the entire app (outside `ClerkProvider`) with `capture_exceptions: true` for automatic error tracking
- **`src/utils/posthog-server.ts`** — singleton `posthog-node` client created for future server-side event capture
- **`src/routes/index.tsx`** — CTA click events captured on the home page hero section
- **`src/components/SkillCard.tsx`** — install command copy and skill open events captured with skill metadata properties
- **`src/components/Navbar.tsx`** — sign-in button click captured for auth funnel entry tracking
- **`src/routes/__auth/sign-in.$.tsx`** — sign-in page view captured on mount
- **`src/routes/__auth/sign-up.$.tsx`** — sign-up page view captured on mount

## Events

| Event | Description | File |
|---|---|---|
| `browse_registry_clicked` | User clicks the "Browse Registry" CTA button on the home page hero section | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the "Publish Skill" CTA button on the home page hero section | `src/routes/index.tsx` |
| `skill_install_command_copied` | User copies the install command from a skill card (includes `skill_title`, `skill_category`, `install_command` properties) | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks the "Open" link on a skill card (includes `skill_title`, `skill_category` properties) | `src/components/SkillCard.tsx` |
| `sign_in_viewed` | User lands on the sign-in page — top of the authentication funnel | `src/routes/__auth/sign-in.$.tsx` |
| `sign_up_viewed` | User lands on the sign-up page — top of the registration funnel | `src/routes/__auth/sign-up.$.tsx` |
| `navbar_sign_in_clicked` | Signed-out user clicks the Sign In button in the navigation bar | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/397038/dashboard/1509730
- **Auth Conversion Funnel** (navbar click → sign-in page → sign-up page): https://us.posthog.com/project/397038/insights/nUY2Y08W
- **Skill Engagement Over Time** (installs + opens as a line chart): https://us.posthog.com/project/397038/insights/zulu1Uus
- **Hero CTA Clicks** (Browse Registry vs Publish Skill): https://us.posthog.com/project/397038/insights/FX2MABg3
- **Install Command Copy Rate by Skill Category** (breakdown by `skill_category`): https://us.posthog.com/project/397038/insights/QD8z6moJ
- **Unique Users Engaging with Skills** (DAU for installs and opens): https://us.posthog.com/project/397038/insights/PbkSDPsw

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-tanstack-start/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
