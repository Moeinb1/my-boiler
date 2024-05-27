# Install dependencies only when needed
FROM node:18.16.0-alpine AS base
RUN apk add --no-cache libc6-compat
RUN mkdir /app
WORKDIR /app
COPY package.json yarn.lock ./

FROM base as pre-prod
COPY . .
RUN yarn install --frozen-lockfile
# Build app
ARG PROFILE
RUN yarn run build

# Rebuild the source code only when needed
FROM node:18.16-alpine AS prod

RUN mkdir /app
WORKDIR /app
COPY --from=pre-prod /app/ .
COPY --from=pre-prod /app/.next ./.next
COPY --from=pre-prod /app/node_modules ./node_modules

# Expose the listening port
EXPOSE 3000
USER node

# Run npm start script when container starts
CMD ["node_modules/.bin/next", "start"]
