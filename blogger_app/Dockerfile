FROM node:20.19.4-bullseye-slim

WORKDIR /blogger

COPY package*.json /blogger

RUN npm i

EXPOSE 3000

CMD ["npm", "run", "dev"]