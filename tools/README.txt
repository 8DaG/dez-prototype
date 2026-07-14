Git hooks are per-clone and not versioned by git. After cloning this repo fresh,
copy post-commit into .git/hooks/ and make it executable:

  cp tools/post-commit .git/hooks/post-commit
  chmod +x .git/hooks/post-commit

This hook one-way mirrors the working tree (excluding .git) to
%OneDrive%/Backups/dez after every commit. OneDrive is never the working copy.
# trivial touch for hook test
