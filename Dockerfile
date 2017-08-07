FROM nginx:1.10-alpine
RUN apk add --no-cache nodejs
WORKDIR /usr/share/nginx/html/acquire-frontend
COPY . /usr/share/nginx/html/acquire-frontend
