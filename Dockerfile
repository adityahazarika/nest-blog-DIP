FROM node:16.13-alpine3.13 AS builder
WORKDIR /usr/src/app
COPY package.json tsconfig.json tsconfig.build.json ./
# COPY ./@myapp ./@myapp
COPY ./src ./src
# RUN npm i -g typescript
RUN npm i
# RUN npm i -g ts-node
# COPY ./@my_package ./node_modules/@myapp
# RUN npm run build

EXPOSE 3000
CMD npm run start