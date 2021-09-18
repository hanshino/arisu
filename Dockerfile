FROM node:lts

WORKDIR /application

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "start" ]
