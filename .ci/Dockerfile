FROM registry.access.redhat.com/ubi8/nodejs-16 as builder

USER 0

WORKDIR /home/graph

COPY package.json .

COPY src .

RUN npm install -g yarn typescript -s &>/dev/null

COPY tsconfig.json .

RUN yarn install --production && yarn run build

FROM registry.access.redhat.com/ubi8/nodejs-16

USER 0

WORKDIR /home/graph

COPY --from=builder /home/graph/package.json .
COPY --from=builder /home/graph/dist ./dist

RUN npm install -g yarn -s &>/dev/null

EXPOSE 4000

ENTRYPOINT [ "yarn run prod" ]