FROM node:14.16.1
WORKDIR /network-policy-viewer


COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install
RUN npm install @emotion/react
RUN npm i --legacy-peer-deps
EXPOSE 8080

CMD ["npm", "run", "start"]