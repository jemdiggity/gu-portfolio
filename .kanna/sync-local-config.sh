#!/bin/sh
# Kanna machine-local config bootstrap.
#
# `.kanna/config.local.json` holds one-machine overrides and is gitignored, so
# Git never carries it into task worktrees. This script:
#   1. ensures the primary checkout has a schema-only skeleton, and
#   2. when run inside a linked worktree, copies the primary checkout's local
#      config into this worktree (primary -> worktree only; never the reverse).
set -eu

LOCAL_CONFIG_REL=".kanna/config.local.json"

common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || {
  echo "sync-local-config: not inside a git repository" >&2
  exit 1
}
case "$common_dir" in
  /*) ;;
  *) common_dir="$(pwd)/$common_dir" ;;
esac
primary_root=$(cd "$common_dir/.." && pwd -P)

primary_config="$primary_root/$LOCAL_CONFIG_REL"
if [ ! -f "$primary_config" ]; then
  mkdir -p "$primary_root/.kanna"
  printf '%s\n' \
    '{' \
    '  "$schema": "https://schemas.kanna.build/config.schema.json"' \
    '}' > "$primary_config"
fi

worktree_root=$(git rev-parse --show-toplevel 2>/dev/null) || exit 0
worktree_root=$(cd "$worktree_root" && pwd -P)

# In the primary checkout there is nothing to sync.
if [ "$worktree_root" = "$primary_root" ]; then
  exit 0
fi

mkdir -p "$worktree_root/.kanna"
cp "$primary_config" "$worktree_root/$LOCAL_CONFIG_REL"
