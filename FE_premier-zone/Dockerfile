# Use official Node.js image
FROM node:22.14.0-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy app code and build
COPY . .

# Use ARG for build-time variable
ARG PUBLIC_BACKEND_URL
ENV PUBLIC_BACKEND_URL=$PUBLIC_BACKEND_URL

RUN npm run build

# Expose port (default SvelteKit Node adapter uses 3000)
EXPOSE 3000
#172.18.66.146
# Start the app
CMD ["node", "build"]