# Dockerfile for Next.js

# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Run the Next.js development server
CMD ["npm", "run", "dev"]
