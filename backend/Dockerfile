# Use Node 18 for Nest.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY stud-pro/package.json stud-pro/package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files from stud-pro to the working directory
COPY stud-pro/ ./

# Build the Nest.js application
RUN npm run build

# Install additional tools for code execution
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    make \
    default-jre-headless \
    python3 \
    python3-pip

# Expose the desired port for the backend
EXPOSE 3001

# Start the Nest.js application
CMD ["npm", "run", "start:prod"]