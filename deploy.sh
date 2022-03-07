if [ $# -eq 0 ]
  then
    echo "Usage deploy <branch>"
    exit 1
fi

echo "deploying branch $1"

pnpm build
git add dist/.
git commit -m "deploy"
git stash

git switch gh-pages
git pull
git checkout $1 -- dist/
rm -rf docs/assets/
mkdir -p docs/
mv dist/* docs/
git add .
git commit -m "deploy"
git push

git switch $1
git stash pop
