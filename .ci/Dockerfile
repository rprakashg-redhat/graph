FROM registry.access.redhat.com/ubi8/nodejs-16 as builder

USER 0

WORKDIR /home/graph

COPY package.json .

ADD src ./src
ADD prisma ./prisma

RUN npm install -g yarn typescript -s &>/dev/null

COPY tsconfig.json .

RUN pwd && ls 

RUN yarn install && \
    yarn run generate && \
    yarn run build

FROM registry.access.redhat.com/ubi8/ubi8/nodejs-16-minimal

USER 0

WORKDIR /home/graph

COPY --from=builder /home/graph/dist ./dist

EXPOSE 4000

ENTRYPOINT [ "node ./dist/index.js" ]