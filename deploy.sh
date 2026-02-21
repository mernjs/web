#!/usr/bin/env bash
set -e

echo "🚀 Starting deployment..."
echo "Shell: $SHELL"
echo "User: $(whoami)"

# ---- HARD LOAD NVM (NO DEPENDENCY ON SHELL) ----
export NVM_DIR="$HOME/.nvm"

if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo "❌ NVM not found at $NVM_DIR"
  exit 1
fi

source "$NVM_DIR/nvm.sh"

nvm use 24

echo "🧠 Node diagnostics"
which node
node -v
which npm
npm -v

cd /var/www/web

echo "📦 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building app..."
npm run build

echo "🔄 Restarting PM2..."
pm2 restart nextjs-app || pm2 start npm --name "nextjs-app" -- start

pm2 save

echo "✅ Deployment successful"