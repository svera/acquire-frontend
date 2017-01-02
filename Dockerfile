FROM nginx:1.10-alpine
RUN apk add --no-cache nodejs git python make g++
WORKDIR /usr/share/nginx/html/acquire-frontend
