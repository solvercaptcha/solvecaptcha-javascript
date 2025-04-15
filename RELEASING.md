# Releasing New Package Version

This document outlines the steps required to release a new version of the package on npm using GitHub Actions for automated publishing.

## Prerequisites

- You have a local clone of the repository.
- Your `package.json` file is properly configured with a unique package name.
- An npm token is added to GitHub Secrets as `NPM_TOKEN`.
- A GitHub Actions workflow file (e.g., `.github/workflows/publish.yml`) is configured to publish the package on tag push.
- All changes are thoroughly tested.

## Step 1: Build and Test the Project

1. **Build the project:**

   If your build script is defined as:

   `npm run build`

   Currently project don't have  tests, you can run  [examples](./examples) files for make sure that project work correcly.


## Step 2: Update the Package Version

1. **Bump the package version:**

   For a patch update, run:

   `npm version patch`
  
   or

   `npm version minor` /  `npm version major` as needed.

    This command updates the version in package.json, creates a commit, and generates a new tag (e.g., `v0.0.2`).

2. **Push Changes:**

   Execute `git push origin master --tags`

   Automated Publishing: The GitHub Actions workflow will automatically build, test, and publish your package to npm.

