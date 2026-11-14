#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

# The laws pin the layout, collision, focus and copy contracts.
bend PROOF.bend

# The page is bundled into a self-contained static site. dist/ is committed
# because the Pages workflow does not install Bend.
rm -rf dist
bend web/index.html -o dist
touch dist/.nojekyll

echo "Built dist/ ($(du -sh dist | cut -f1))"
