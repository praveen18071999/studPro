# Use Node 18 for Nest.js
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY stud-pro/package.json ./

# Install dependencies
RUN npm install

# Copy all files from stud-pro to the working directory
COPY stud-pro/ ./

# Install additional tools for code execution and Puppeteer dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    make \
    default-jre-headless \
    python3 \
    python3-pip \
    wget \
    gnupg \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libxkbcommon0 \
    libgbm1 \
    libpango1.0-0 \
    libasound2 \
    libwayland-client0 \
    libwayland-cursor0 \
    libwayland-egl1 \
    libx11-xcb1 \
    libxcursor1 \
    libxfixes3 \
    libxi6 \
    libxtst6 \
    libxss1 \
    libxinerama1 \
    libgtk-3-0 \
    libxshmfence1 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Install Chrome
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*

# Add user so we don't need --no-sandbox.
RUN groupadd -r pptruser && useradd -r -g pptruser -G audio,video pptruser \
    && mkdir -p /home/pptruser/Downloads \
    && chown -R pptruser:pptruser /home/pptruser

# Change ownership of the /app directory to pptruser
RUN chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
USER pptruser

# Build the Nest.js application
RUN npm run build

# Expose the desired port for the backend
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start:prod"]