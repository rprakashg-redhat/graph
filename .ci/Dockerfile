FROM registry.access.redhat.com/ubi8/nodejs-16 AS builder

USER 0

WORKDIR /home/graph

COPY package.json .

ADD src ./src
ADD prisma ./prisma

RUN npm install -g yarn typescript -s &>/dev/null

COPY tsconfig.json .
COPY .env .

RUN pwd && ls 

RUN yarn install && \
    yarn run generate && \
    yarn run build

FROM registry.access.redhat.com/ubi8/nodejs-16-minimal

RUN npm install -g yarn typescript -s &>/dev/null

USER 0

WORKDIR /home/graph

COPY --from=builder /home/graph/package.json .
COPY --from=builder /home/graph/prisma ./prisma

RUN yarn install --production=true && \
    npx prisma generate

COPY --from=builder /home/graph/dist ./dist

EXPOSE 4000

CMD [ "node", "/home/graph/dist/index.js" ]