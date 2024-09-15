# Use Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the server code and dependencies
COPY server/package*.json ./server/

# Navigate to the 'server' directory and install the server dependencies
RUN cd server && npm install

# Copy the rest of the server code
COPY server/ ./server/

# Copy the built frontend
COPY dist/ ./dist

# Set the working directory for the server
WORKDIR /app/server

# Command to start the server
CMD ["node", "index.js"]
