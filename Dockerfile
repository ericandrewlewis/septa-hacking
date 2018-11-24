FROM node:carbon
  
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

USER node

# CMD [ "npm", "start" ]
ENTRYPOINT npm start

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/