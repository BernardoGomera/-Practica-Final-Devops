# Etapa de ejecución simple para app Express
FROM node:20-alpine AS runtime

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev

COPY src ./src
COPY public ./public

EXPOSE 3000
CMD ["npm", "start"]