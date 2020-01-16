FROM node

RUN mkdir /egg-server

WORKDIR /egg-server

COPY package.json /egg-server/package.json

COPY . /egg-server

RUN npm install --registry=https://registry.npm.taobao.org

# RUN npm run build
RUN npx easywebpack build prod

# COPY . /egg-server

EXPOSE 7001

CMD npm start
