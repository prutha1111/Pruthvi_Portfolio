#!/bin/bash
rm -f package-lock.json package.json
npx --yes create-vite@latest temp-portfolio --template react
mv temp-portfolio/* .
cp -r temp-portfolio/.* . 2>/dev/null
rm -rf temp-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install gsap @react-three/fiber @react-three/drei three lucide-react clsx tailwind-merge framer-motion
