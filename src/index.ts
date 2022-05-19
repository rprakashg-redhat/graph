import { server } from "./server";

const port = 4000;

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});