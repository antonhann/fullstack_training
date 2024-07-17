//process.env
const env = process.env;
//process.env is command line arguments passed to the node.js process
//PORT=3000 HOST=localhost npm run dev:server
export const HOST = env.HOST ?? "localhost";
export const PORT = env.PORT ?? "8080";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = env.MONGODB_URI ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";

export default {
    PORT,
    HOST,
    SERVER_URL,
    MONGODB_URI,
}
