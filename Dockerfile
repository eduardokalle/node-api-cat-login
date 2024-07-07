# Base image for Node.js
FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build TypeScript code
RUN npm run build

# Expose application port
EXPOSE 3000

# Run the application
CMD ["node", "dist/index.js"]
