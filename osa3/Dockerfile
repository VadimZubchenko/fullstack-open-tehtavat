# 1. Use an official Node.js runtime as a base image
FROM node:14

# 2. Set the working directory inside the container
WORKDIR /server

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install the project dependencies
RUN npm install

# 5. Copy the rest of the application code to the container
COPY . .

# 6. Expose the port your app runs on
EXPOSE 3001

# 7. Command to start the application
CMD ["npm", "start"]
