import express from "express";
import route from "./route/index";
import cookieParser from "cookie-parser";

const app = express();
const basePath = "/placeholder";

app.use(express.json());
app.use(cookieParser());
app.use(basePath, route);

export default app;
