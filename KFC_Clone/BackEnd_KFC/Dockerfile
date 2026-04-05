FROM node:18-bullseye

WORKDIR /app

# Copy only backend package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

ENV PORT=5000
EXPOSE 5000

CMD ["npm", "start"]