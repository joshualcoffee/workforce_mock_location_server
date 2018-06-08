FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn
ADD . /usr/src/app
RUN npm install -g nodemon
EXPOSE 3000
CMD [ "yarn", "run", "start" ]
