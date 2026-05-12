 FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
run npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
