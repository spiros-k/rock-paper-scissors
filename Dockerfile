FROM node:16

COPY . .

RUN apt-get update && apt-get install -y npm

CMD node index.js