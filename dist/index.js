"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = 4000;
server_1.server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
