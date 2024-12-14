FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

# dev
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# prod
FROM base AS production
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]