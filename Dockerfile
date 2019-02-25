FROM node:10.15-alpine
MAINTAINER kazama@giftee.co

RUN mkdir /myapp
WORKDIR /myapp
COPY . /myapp

RUN npm install --global yarn
RUN yarn

ENTRYPOINT ["yarn", "run", "start"]
