# Use the official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the public and src directories to the container
COPY public/ public/
COPY src/ src/

# Build the React app
RUN npm run build

# Install serve to serve the React build folder
RUN npm install -g serve

# Command to serve the React app
CMD ["serve", "-s", "build"]

# Expose the frontend port
EXPOSE 3000
