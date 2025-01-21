FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application files
COPY . .

# Build the NestJS application
# RUN pnpm build

# Expose the application port
EXPOSE 7500

# Command to run the application
CMD ["pnpm", "start"]
