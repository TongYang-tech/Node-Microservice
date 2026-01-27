import http from "http";
import app from "./app";

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
