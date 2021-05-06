rm -rf ../PROXY_SERVER/public/*
npm run dev:build-all
mv dist/* ../PROXY_SERVER/public/
rm -rf dist/ modules-manifest.js