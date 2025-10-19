#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Running custom Vercel build script..."

# Install root dependencies
echo "Installing root dependencies..."
npm install

# Build frontend
echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

# Install backend dependencies (if any specific to backend not covered by root)
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

echo "Vercel build script finished successfully."
