FROM node:21-alpine3.18

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash

RUN mkdir node-starter

USER node

WORKDIR /node-starter

EXPOSE 4000

ENV NODE_ENV=dev 

CMD [ "npm", "start" ]