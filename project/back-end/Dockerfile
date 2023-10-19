FROM node:18.17.1-alpine
WORKDIR /app
COPY . .
EXPOSE 3001
RUN ["npm", "install"]
RUN apk update && apk add bash
CMD  [ "/bin/bash", "-c", "npx knex migrate:latest && npx knex seed:run && npm start" ]