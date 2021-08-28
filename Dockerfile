# Step 1
FROM node:14.17.0-alpine as build-step

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Step 2

FROM nginx:1.20.1

COPY --from=build-step app/dist/capstone-project /usr/share/nginx/html

EXPOSE 80:80