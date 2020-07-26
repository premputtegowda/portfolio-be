const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
const apiRouter = require("./apiRouter.js");


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api", apiRouter);


module.exports = server;