git switch gh-pages
git checkout migrate_to_vite -- dist/
rm -rf docs/
mkdir docs/
mv dist/* docs/
git add .
git commit -m "deploy"
git push