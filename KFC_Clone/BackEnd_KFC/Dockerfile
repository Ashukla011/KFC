# Backend Dockerfile
FROM node:20-alpine
# WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose backend port
EXPOSE 5000

# Default environment variable in docker-compose
ENV PORT=5000
CMD ["npm", "start"]
