FROM node:alpine3.23 AS base
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

FROM base AS dep
USER root:root
RUN apk update \
    && apk add --no-cache python3 curl bash jq # random needed build tools

FROM dep AS build
RUN mkdir -p /tmp/app \
    && chown -R appuser:appgroup /tmp/app
USER appuser:appgroup
WORKDIR /tmp/app
COPY --chown=appuser:appgroup package.json package-lock.json ./
RUN npm ci

COPY --chown=appuser:appgroup . .
RUN npm run build

FROM build AS prep
COPY --chown=appuser:appgroup --from=build /tmp/app /tmp/app
RUN npm prune --production

FROM prep AS prod
COPY --chown=appuser:appgroup --from=build /tmp/app /tmp/app/
CMD ["node", "dist/src/index.js"]
