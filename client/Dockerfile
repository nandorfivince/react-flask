FROM node:16

WORKDIR /app

COPY package*.json ./

RUN yarn add -D cross-env
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
