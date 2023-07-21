# Set of instructions to build the image

# 1. Specify the base layer image
# Get the 17th version of the node image and use Alpine as the base linux distribution
FROM node:17-alpine

RUN npm install -g nodemon

# Add a working directory: it is a directory where the application will be stored
WORKDIR /app
# Below is the same as: cd /app

# 2. Add another layer to the image
# COPY <source> <destination>
COPY . .

# 3. Describe the dependencies
RUN npm install

# 4. Specify the port number that needs to be exposed
EXPOSE 4000

# 5. Specify the command to run on container startup
CMD ["npm", "run", "dev"]


