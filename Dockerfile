FROM node:16-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 5100
CMD [ "npm", "run", "dev" ]

