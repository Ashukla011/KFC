# Frontend (React) Dockerfile
FROM node:20-alpine as build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build app
COPY . .
RUN npm run build

# Production image
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Remove default nginx conf and add a simple router fallback
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
