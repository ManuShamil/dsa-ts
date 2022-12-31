#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 <project-name>"
    exit 1
fi

PROJECT_NAME=$1

if [ -d "$PROJECT_NAME" ]; then
    echo "Directory $PROJECT_NAME already exists"
    exit 1
fi

mkdir "$PROJECT_NAME"

PACKAGE_JSON_TEMPLATE=$(cat "package-template.json")
PACKAGE_JSON=""
printf -v PACKAGE_JSON "$PACKAGE_JSON_TEMPLATE" "$PROJECT_NAME"

cp "tsconfig-template.json" "$PROJECT_NAME/tsconfig.json"
cp -r "__template_src__" "$PROJECT_NAME/src"

echo "$PACKAGE_JSON" > "$PROJECT_NAME/package.json"


cd "$PROJECT_NAME"

npm install

npm run dev

