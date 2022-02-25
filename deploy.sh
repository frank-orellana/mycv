pnpm build
git add dist/.
git commit -m "deploy"
git stash

git switch gh-pages
git checkout $1 -- dist/
rm -rf docs/
mkdir docs/
mv dist/* docs/
git add .
git commit -m "deploy"
git push

git switch $1
git stash pop
