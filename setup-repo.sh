#!/bin/bash

# ShanTiptap Repository Setup Script
# This script helps you create a separate repository for ShanTiptap

echo "🚀 Setting up ShanTiptap as a separate repository..."

# Check if we're in the ShanTiptap directory
if [[ ! -f "package.json" ]] || [[ ! -f "TipTap.tsx" ]]; then
    echo "❌ Error: Please run this script from the ShanTiptap directory"
    exit 1
fi

# Initialize git repository
echo "📁 Initializing git repository..."
git init

# Create initial commit
echo "📝 Creating initial commit..."
git add .
git commit -m "Initial commit: ShanTiptap rich text editor

✨ Features:
- Rich text editing with Tiptap
- Heading dropdown (H1, H2, H3)
- List dropdown (bullet, ordered)
- Text formatting (bold, italic, underline)
- Text alignment (left, center, right, justify)
- SSR compatible with Next.js
- TypeScript support
- CSS Modules styling"

echo "✅ Repository initialized successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub called 'shan-tiptap'"
echo "2. Run the following commands:"
echo "   git remote add origin https://github.com/your-username/shan-tiptap.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "📦 To publish to npm:"
echo "   npm login"
echo "   npm publish"
echo ""
echo "🔗 To use in other projects:"
echo "   npm install shan-tiptap"
echo "   import { ShanTiptap } from 'shan-tiptap'"
