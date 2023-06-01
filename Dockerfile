FROM node:16.20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist /app/dist

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
