import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";
import { DB_URI, PORT } from "./config";
import connectDB from "./config/db";
import api from "./routes";
import logger from "./utils/logger";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin"
  );
  next();
});

/**
 * INIT SOCKET
 */
io.on("connection", (socket) => {
  socket.on("login", (data) => {
    socket.broadcast.emit("refresh_login");
  });
});

/**
 * USE API
 */
app.use("/api", api);

/**
 * CONNECT TO DB
 */
connectDB(DB_URI);

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
