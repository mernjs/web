#!/bin/bash

set -e   # stop on error

echo "📁 App directory"
pwd

echo "📦 Pulling code"
git pull origin main

echo "📦 Installing dependencies"
npm install

echo "🏗️ Building app"
npm run build

echo "🚀 Restarting PM2"
pm2 restart nextjs-app || pm2 start npm --name nextjs-app -- start

pm2 save

echo "✅ Deployment successful"