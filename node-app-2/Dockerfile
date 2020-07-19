FROM node

WORKDIR /app

COPY ./package*.json ./

RUN npm install --production

COPY ./server.js .

ENV PORT 80

EXPOSE 80

CMD ["npm", "start"]