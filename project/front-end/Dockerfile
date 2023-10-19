FROM node:18.17.1-alpine as build
WORKDIR /app
COPY package*.json .
RUN npm install
ARG REACT_APP_API_URL
RUN echo "REACT_APP_API_URL=$REACT_APP_API_URL" > .env.production.local
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80