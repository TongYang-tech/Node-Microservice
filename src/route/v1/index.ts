import express from "express";
import posts from "./posts";

const router = express.Router();

router.get("/posts", posts);

export default router;
