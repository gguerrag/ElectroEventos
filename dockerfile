# Etapa 1: build Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build proyecto --configuration production

# Etapa 2: servir con Nginx
FROM nginx:alpine

COPY --from=build /app/dist/proyecto /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
