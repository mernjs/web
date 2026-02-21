#!/usr/bin/env bash
set -e

echo "🚀 Starting deployment..."

# ---- FORCE NVM LOAD (PERMANENT FIX) ----
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
else
  echo "❌ NVM not found"
  exit 1
fi

# Lock node version
nvm use 24

echo "🧠 Node info:"
which node
node -v
npm -v

cd /var/www/web

echo "📦 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🔄 Restarting PM2..."
pm2 restart nextjs-app || pm2 start npm --name nextjs-app -- start

pm2 save

echo "✅ Deployment successful"