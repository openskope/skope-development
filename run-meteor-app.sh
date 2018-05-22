#!/bin/bash

# This runs the meteor app directly with the config file without other services.

set -e

# Get current directory.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR="${DIR}/web-app/meteor-app"

set -a
source "${DIR}/configs/web-app.env"
set +a

cd "$APP_DIR"
export BUILD_GIT_COMMIT=$(git rev-parse --verify HEAD)
meteor npm install
meteor run --settings "${DIR}/configs/web-app-settings.json"
