import http from "http";
import app from "./app";
import logger from "./utils/logger";

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, () => {
  logger.info(`Server is listening on port ${port}`);
});
