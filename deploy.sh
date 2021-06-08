#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git branch -m main

# git push -f git@github.com:ngnl666/ngnl666.github.io.git main
git push -f git@github.com:ngnl666/CoffeeBean.git main:gh-pages

cd -