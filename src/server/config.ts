//process.env
const env = process.env;
//process.env is command line arguments passed to the node.js process
//PORT=3000 HOST=localhost npm run dev:server
export const HOST = env.HOST ?? "localhost";
export const PORT = env.PORT ?? "8080";
export const SERVER_URL = `http://${HOST}:${PORT}`;
export default {
    PORT,
    HOST,
    SERVER_URL,
}
