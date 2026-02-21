
#!/bin/bash
set -e

echo "🚀 Starting deployment..."

# Load nvm (VERY IMPORTANT)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "📦 Node version:"
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