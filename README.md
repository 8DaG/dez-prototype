# Dež

Slovene vocabulary arcade game. Words fall like rain; tap the matching Slovene word before they land. Three surfaces: arcade (Igraj), Spomin pairs game, and the Slovarček dictionary.

**Live:** https://8dag.github.io/dez-prototype/

## Structure

- Content lives in `dez-data.js` (icons, vocabulary pool, dual/plural number forms, topics). Game code lives in `index.html`. Adding a word batch means editing `dez-data.js` only — game code changes only for mechanics, never for content.
- Run `node verify.js` before every commit. It's the QA gate: checks POOL/ICONS/NUMBER_FORMS consistency and flags contrast issues.
- `STYLE.md` is binding on all icon work.
- `docs/classroom-spec-DRAFT.txt` is a **PRE-GUARDIAN DRAFT** — not buildable yet. It must pass a superintelligence-guardian review before any implementation brief is written, and the classroom platform it describes lives in the Superintelligence Next.js app, not this repo.

## OneDrive backup

This repo is never worked on from inside OneDrive (sync locking corrupts git). After cloning fresh, install the mirror hook so every commit backs up to OneDrive:

```
cp tools/post-commit .git/hooks/post-commit
chmod +x .git/hooks/post-commit
```

## Canonical location

`C:\Dev\superintelligence\games\dez` — a standalone git repo, deliberately outside the Superintelligence app's own git history (see the app repo's `.gitignore`).
