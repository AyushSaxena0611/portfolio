#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Ayush Saxena's Portfolio - Setup${NC}"
echo -e "${BLUE}========================================${NC}\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js is not installed. Please install Node.js 16+ first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js version: $(node --version)"
echo -e "${GREEN}✓${NC} npm version: $(npm --version)\n"

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ Dependencies installed successfully!${NC}\n"
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}  Setup Complete!${NC}"
    echo -e "${BLUE}========================================${NC}\n"
    echo -e "${GREEN}To start the development server, run:${NC}"
    echo -e "${YELLOW}  npm run dev${NC}\n"
    echo -e "${GREEN}To build for production, run:${NC}"
    echo -e "${YELLOW}  npm run build${NC}\n"
else
    echo -e "\n${YELLOW}⚠️  Error installing dependencies. Please try again.${NC}"
    exit 1
fi
