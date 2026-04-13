import express from "express";
import route from "./route/index";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

const app = express();
const basePath = "/placeholder";

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(basePath, route);

export default app;
