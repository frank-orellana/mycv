# My CV

Just My CV, developed with Vue and Typescript, you can see it [here](https://cv.frank-orellana.com/)

## Pre requisites
1. Install pnpm: https://pnpm.io/installation
2. Install node: pnpm env use lts -g
3. pnpm install
4. (Optional) pnpm update

## Scripts
Just some things so I don't forget how to update and run this
### Compile and watch
```js
pnpm dev
```

To build, run 
```js
pnpm build
```

Then run `dist/index.html` with live server extension to check the distribution version.

To build and deploy to github pages, run (need to be in a clean git state)
```bash
pnpm run deploy

# OR
./deploy.sh main
```

To run sonarqube
```bash
pnpx sonar-scanner -Dsonar.login=<token>
```
