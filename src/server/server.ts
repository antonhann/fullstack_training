//compile code with typescript npx tsc src/server/server.ts 
//run code with node src/server/server.js

import express from "express";
import os from "node:os";

//importing own module
import config from "./config";

const server = express();

//initialize static middleware
server.use(express.static("dist"));

//inform express to use ejs as view engine
//will look for views in the views folder
server.set("view engine", "ejs");

//intialize route
server.use("/", (req, res) => {
    res.render("index", {
        content: "EJS is pretty cool!"
    });
});
//express listen method to start the server
server.listen(config.PORT, config.HOST, () => {
    console.info(
        `Server is running on ${config.SERVER_URL}`,
        `Free memory: ${os.freemem() / 1024 / 1024} bytes`
    );
});