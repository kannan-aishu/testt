#!/bin/bash

MESSAGE=${1:-"Auto-commit on $(date)"}

git add .
git commit -m "$MESSAGE"
git push
