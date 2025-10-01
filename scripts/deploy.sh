#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to Vercel

set -e

echo "🚀 Starting deployment process..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Run pre-deployment checks
echo "🔍 Running pre-deployment checks..."

# Check if build passes
echo "📦 Building project..."
npm run build

# Run linting
echo "🔍 Running linter..."
npm run lint

echo "✅ All checks passed!"

# Deploy based on argument
if [ "$1" = "prod" ] || [ "$1" = "production" ]; then
    echo "🌟 Deploying to production..."
    vercel --prod
elif [ "$1" = "preview" ]; then
    echo "👀 Creating preview deployment..."
    vercel
else
    echo "🤔 No deployment type specified."
    echo "Usage: ./scripts/deploy.sh [prod|preview]"
    echo "  prod/production: Deploy to production"
    echo "  preview: Create preview deployment"
    exit 1
fi

echo "🎉 Deployment complete!"