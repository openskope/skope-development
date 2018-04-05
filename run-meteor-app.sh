#!/bin/bash

# This runs the meteor app directly with the config file without other services.

set -e

# Get current directory.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
APP_DIR="${DIR}/web-app/meteor-app"

source "${DIR}/configs/web-app.env"

cd "$APP_DIR"
meteor npm install
meteor run --settings "${DIR}/configs/web-app-settings.json"
