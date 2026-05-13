#build stage
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#production stage
FROM node:alpine as production-stage
WORKDIR /app
RUN npm i -g serve
COPY --from=build-stage /app/dist ./dist
EXPOSE 3000 
CMD ["serve", "-s", "dist", "-l", "3000"]

 

