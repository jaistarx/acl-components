# RAQ Reuseable React Components Library

A collection of versatile and reusable React components built with Material-UI (MUI). This library aims to streamline the development process by providing ready-to-use components that adhere to RAQ standards, guidelines and best practices, ensuring a consistent and cohesive user experience across applications.

## Overview

This repository is to upload the source code of the components built for RAQ reuseable React Components Library.

- Latest version

  ```plaintext
  1.4.8
  ```

## Prerequisites

- [`Node.js and npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Integrating the Library(@acl/ui) into your project

### Setup

1. Add a `.npmrc` to your project, in the same directory as your `package.json`

2. Add the content below into your `.npmrc` file

   ```plaintext
   registry=https://pkgs.dev.azure.com/AdvantasureRAQ/RAQ/_packaging/Prod_v1/npm/registry/
   always-auth=true
   ```

3. Run this command in your project directory to install `vsts-npm-auth` globally if it's not available

   ```bash
   npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
   ```

4. Run this command in your project directory to get an Azure Artifacts token added to your user-level `.npmrc` file

   ```bash
   npx vsts-npm-auth -config .npmrc
   ```

   - Proceed with the instructions provided. If prompted to log in, use your `entcorecloud account`

- _`Note: Steps 1, 2 and 3 are a one-time setup. Step 4 needs to be run again only if npm gives you a 401 Unauthorized error while installing @acl/ui.`_

5. _[Must]_ Delete `@acl or @acl/ui alias name` from `all the webpack configs`(Eg: inside webpack.config.ts) if it's present

6. _[Must]_ Delete `@acl or @acl/ui path name` from `tsconfigs`(Eg: inside tsconfig.json or tsconfig.paths.json) if it's present

7. _[Must]_ Delete `@acl directory` from `src directory` if it's present

### Installation

- Run this command in your project directory

  ```bash
  npm install @acl/ui
  ```

### Upgradation

- Run this command in your project directory

  ```bash
  npm install @acl/ui@latest
  ```

## Commonly faced issues after installation

### Module not found: Error: Can't resolve '@acl/ui'

1. Delete the `node_modules directory`

2. Delete the `package-lock.json file`

3. Clean up the NPM cache by running this command in your project directory

   ```bash
   npm cache clean --force
   ```

4. Install all packages again by running this command in your project directory

   ```bash
   npm install
   ```

- If the error still shows up, check `all the webpack configs or tsconfigs` and delete the line containing `@acl name`

  ```ts
  "alias": {
    // Delete this line from all the webpack configs(Eg: inside webpack.config.ts)
    "@acl": path.resolve(__dirname, "src/@acl"),
  },
  ```

  ```ts
  "paths": {
    // Delete these lines from all the tsconfigs(Eg: inside tsconfig.json or tsconfig.paths.json)
    "@acl": ["src/@acl"],
    "@acl/*": ["src/@acl/*"],
  }
  ```

## Features

- Run this command to start testing the components after importing them inside `src/c-test/c-test.tsx`

  ```bash
  npm run ctest
  ```

- Run this command to create a `production bundle(dist)` of the components(_excluding `c-test directory`_)

  ```bash
  npm run build
  ```

- Run this command to lint and format all files inside `src directory`

  ```bash
  npm run format
  ```

- Run this command to package the build files in the `dist directory` into a `.tgz file` in the `release directory`

  ```bash
  npm run pack:release
  ```

- The library can be installed from the generated `.tgz file inside release directory`. Copy the `.tgz file` into the directory containing your `package.json` and run this command

  ```bash
  npm install ./acl-ui-version.tgz
  ```

  - _`Note: Replace acl-ui-version.tgz with the specific version you want to install(Eg: acl-ui-1.0.0.tgz)`_

## Available components

```plaintext
AclAccordion
AclAutocomplete
AclAvatar
AclBackdropLoader
AclBox
AclButton
AclCard
AclCheckbox
AclChip
AclCollapse
AclCssBaseline
AclDatepicker
AclDivider
AclDropdown
AclDropzone
AclFormControl
AclFormControlLabel
AclIcon
AclIconButton
AclInput
AclInputBase
AclLink
AclList
AclListItem
AclListItemButton
AclListItemText
AclLoader
AclModal
AclPagination
AclPaper
AclPopover
AclPopper
AclRadio
AclRadioGroup
AclSnackbar
AclTable
AclTablePagination
AclTabs
```
