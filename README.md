# NgIso
Angular Universal PWA Starter built with Angular Cli on Expressjs.

## Assumptions
- angular cli (project generated with version 1.3.1)
- yarn (dependency management)
- angular 4.3+ (new httpClient)
- It is written for a windows machine, simple commands like copying (robocopy) and delete (del) would need to be replaced with os equivalent.
- You have another folder called ng-iso-deploy on the same level that you have ng-iso.
	- ng-iso-deploy contains:a git repo, .gitignore, and .gitattributes. It is the deployment folder that you pull from to update the server.
	- The various build scripts add server.js and the entire frontend dist folder to the ng-iso-deploy folder.

## Files that require changes for a fresh project
- webpack.config.js change the output path from `'../ng-iso-deploy'` to `your-project-name-deploy`
- package.json
	- script `copy-frontend-to-deploy-folder` & `push-dist-to-github` & `serverLocal` change any mentions of `ng-iso` to your project name.

## Useful Commands
- `ng serve` - Run in frontend development mode on port 4200.
- `npm run serverLocal` - Full build of frontend and backend, then serves frontend and backend on port 8000.
- `npm run serverRebuild` - Rebuild and run server on port 8000, assumes no frontend changes.
- `npm run deploy` - Push server & frontend assets to github deployment repo.
- `npm run analyze` - bundle analysis of non-tree shaken bundle. lets you see the individual angular module pieces.
- `npm run analyze-deploy` - bundle analysis of tree shaken bundle. kind of opaque, but truest to reality.
- `yarn upgrade-interactive` - Upgrade only what you want to.