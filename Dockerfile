# Use the latest Node.js LTS image as a base
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to install dependencies first
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application source code
COPY . .

# Expose the application port
EXPOSE 8888

# Start the Nest.js application
CMD ["pnpm", "run", "start:dev"]
