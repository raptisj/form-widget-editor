# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application source code to the working directory
COPY . .

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "start"]
