FROM alpine
RUN apk add --update nodejs nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3003
ENTRYPOINT npx nodemon ./reviewServer.ts