import express from "express";
import healhRouter from "./route/health";

const app = express();

app.use(healhRouter);

export default app;
