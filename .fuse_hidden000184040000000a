pnpm build
git add .
git commit -m "deploy"

git switch gh-pages
git checkout $1 -- dist/
rm -rf docs/
mkdir docs/
mv dist/* docs/
git add .
git commit -m "deploy"
git push

git switch $1