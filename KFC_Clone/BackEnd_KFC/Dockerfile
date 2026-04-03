# Backend Dockerfile
FROM node:20-alpine
# WORKDIR /app
RUN npm cache clean --force

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose backend port
EXPOSE 5000

# Default environment variable in docker-compose
ENV PORT=5000
CMD ["npm", "start"]
