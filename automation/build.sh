#!/bin/sh

set -e
rm -f ./automation/artifact.zip
./node_modules/.bin/tsc
zip -q -x "*.ts" "typings/*" "*.git*" "docs/*" "automation/*" ".vscode" "yarn.lock" -r ./automation/artifact.zip .