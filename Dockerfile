FROM node:alpine3.23 AS build
COPY . .
RUN npm install
RUN npm run build

FROM build AS prepare
COPY --from=build . .
RUN npm prune --production

FROM prepare AS release
COPY --from=prepare . .

EXPOSE 8080

CMD ["node", "dist/src/index.js"]
