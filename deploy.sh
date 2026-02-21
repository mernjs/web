#!/bin/bash
set -e

echo "🚀 Starting deployment..."

cd /var/www/web

echo "📦 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building Next.js app..."
npm run build

echo "♻️ Restarting PM2 app..."
pm2 restart nextjs-app || pm2 start npm --name nextjs-app -- start

echo "✅ Deployment finished successfully!"
