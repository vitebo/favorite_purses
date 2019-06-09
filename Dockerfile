FROM node:12.4.0-alpine

ADD . /app
WORKDIR /app

RUN apk add --no-cache --update bash
RUN yarn --pure-lockfile

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

EXPOSE 3000

CMD [ "yarn", "dev" ]
