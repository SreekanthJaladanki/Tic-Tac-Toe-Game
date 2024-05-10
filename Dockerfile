# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the frontend code
RUN npm run build

# Expose port 3000 (assuming your application runs on port 3000)
EXPOSE 3000

# Command to run the application
CMD [ "npm", "start" ]
