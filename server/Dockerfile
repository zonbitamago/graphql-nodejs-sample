FROM node:11.6.0-alpine

COPY package.json .
COPY package-lock.json .
COPY index.js .
RUN npm ci

EXPOSE 5000

CMD [ "npm", "start" ]