# Backend Dockerfile
FROM node:18
# WORKDIR /app
RUN npm cache clean --force

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Expose backend port
EXPOSE 5000

# Default environment variable in docker-compose
ENV PORT=5000
CMD ["npm", "start"]
