FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# command to run the app
CMD [ "npm", "run", "dev" ]