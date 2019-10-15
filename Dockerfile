FROM node:12.12.0-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install -s
COPY . .

EXPOSE 8000
CMD ["npm", "run", "start-nodemon"]