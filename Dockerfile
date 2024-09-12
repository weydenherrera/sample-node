FROM node:20.17-alpine3.20
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json /opt/app/
RUN npm install
COPY . /opt/app
EXPOSE 8080
CMD [ "node", "index.js"]