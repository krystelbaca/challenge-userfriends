FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install
RUN npm install mongodb

COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]
