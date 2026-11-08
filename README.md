# NOVA STORE — demo

Responsive front-end prototype for an app/game marketplace.

## Included
- NOVA neon logo and dark futuristic interface
- Search and category filters
- Login/register interface; Proton Mail addresses can be entered
- APK file picker and app metadata form
- Basic client-side `.apk` extension check

## Important limitations
This is a front-end demo only. Proton does not provide a general-purpose “Sign in with Proton” OAuth service for arbitrary websites. A Proton Mail address can be used as an email address with a real auth provider (for example, Supabase Auth) and email verification. The current forms do not create real accounts, save passwords, upload APKs, scan malware, or run AI moderation. Those require a secure backend, storage, authentication, and server-side scanning/moderation before public launch. Never collect or store users' passwords in browser local storage.
