# Backend Dockerfile
FROM node:18-bullseye
# WORKDIR /app


# Install dependencies
COPY package*.json ./
RUN npm install

# # Copy source
# COPY . .

# Expose backend port
EXPOSE 5000

# Default environment variable in docker-compose
ENV PORT=5000
CMD ["npm", "start"]
