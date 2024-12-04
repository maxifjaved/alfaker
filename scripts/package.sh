#!/bin/bash

# Clean dist directory
rm -rf dist
mkdir -p dist

# Run build
node build.js

# Copy info.plist to dist
cp info.plist dist/

# Make the bundled script executable
chmod +x dist/index.js

# Test the built script
echo "Testing built script..." >> ~/Library/Logs/alfaker.log
node dist/index.js help >> ~/Library/Logs/alfaker.log 2>&1

# Create the workflow package
cd dist
zip -r ../alfaker.alfredworkflow . -x "*.git*" -x "*.DS_Store"
cd ..

echo "Created alfaker.alfredworkflow ✨"