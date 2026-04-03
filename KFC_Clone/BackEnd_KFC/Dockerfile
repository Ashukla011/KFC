# Use lightweight Node image
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy source code
COPY . .

# Set environment variable
ENV PORT=5000

# Expose port (Render uses PORT env automatically, but this is fine)
EXPOSE 5000

# Start app
CMD ["npm", "start"]