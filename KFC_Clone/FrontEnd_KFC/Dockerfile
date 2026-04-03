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

# Install envsubst
RUN apk add --no-cache gettext

# Copy nginx template
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Substitute environment variables and copy to final location
RUN envsubst '${BACKEND_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
