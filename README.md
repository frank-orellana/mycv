# My CV

Just My CV, developed with Vue and Typescript, you can see it [here](https://tritium.cl/cv/)

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

To deploy to github pages, run 
```bash
pnpm deploy

# OR
./deploy.sh main
```

Then run `dist/index.html` with live server extension

To run sonarqube
```bash
pnpx sonar-scanner -Dsonar.login=<token>
```