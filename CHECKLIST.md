# Basic Marine — Quick Checklist for Working from Another PC

This checklist shows the minimal steps to clone, set up, and push changes from a different machine.

## Clone (HTTPS)
```bash
git clone https://github.com/basicmarine/basicmarine-site.git
cd basicmarine-site
```

## Clone (SSH)
```bash
ssh-keygen -t ed25519 -C "you@example.com"
# add ~/.ssh/id_ed25519.pub to GitHub > Settings > SSH and GPG keys
git clone git@github.com:basicmarine/basicmarine-site.git
cd basicmarine-site
```

## GitHub CLI
```bash
gh auth login
gh repo clone basicmarine/basicmarine-site
cd basicmarine-site
```

## Configure identity
```bash
git config user.name "Your Name"
git config user.email you@example.com
```

## Typical workflow
```bash
git pull                # get latest
# edit files
git add .
git commit -m "Describe changes"
git push
```

## Notes
- If your original PC has unpushed local changes, push them first so the other PC sees the latest state.
- The repository already contains a `CNAME` for your Pages custom domain; no extra Pages file is required.
- Use the web editor (`github.dev`) or Codespaces for no-local-setup edits.

If you want, I can commit this file to the repository and push it now.