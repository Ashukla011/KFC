# Backend Dockerfile
FROM node:18-bullseye
WORKDIR /BackEnd_KFC


# Copy only package files first
COPY package.json package-lock.json ./

# Clean + install (stable)
RUN npm cache clean --force && npm install

# Copy source
COPY . .

# Expose backend port
EXPOSE 5000

# Default environment variable in docker-compose
ENV PORT=5000
CMD ["npm", "start"]
