FROM node:11.6.0-alpine

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "start" ]