# Using npm with Your TypeScript Project

## Overview
npm is the package manager for Node.js, helping manage project dependencies and scripts. This guide covers essential npm commands for TypeScript projects.

## Commands

### Install Dependencies
Install all dependencies listed in `package.json`:
npm install

### Add a New Package
Add a new package:
npm install package-name
For development dependencies:
npm install --save-dev package-name

### Update Packages
Update all packages to their latest versions:
npm update

### Remove a Package
Remove a package from your project:
npm uninstall package-name
For development dependencies:
npm uninstall --save-dev package-name

### Run Scripts
Run scripts defined in `package.json`:
npm run script-name
For example, to start the project:
npm start

### Check for Vulnerabilities
Check for known vulnerabilities in dependencies:
npm audit
Fix vulnerabilities automatically:
npm audit fix

### Build the Project
Compile TypeScript code and create production builds:
npm run build

### Test the Project
Run tests defined in `package.json`:
npm test

### Clean Project
Remove `node_modules` and reinstall everything:
rm -rf node_modules
npm install

## Configuration

### `package.json`
Defines dependencies, scripts, and configurations. Keep it updated with necessary packages and scripts.

### `tsconfig.json`
Contains TypeScript compiler options. Adjust according to your project needs to control TypeScript compilation.
