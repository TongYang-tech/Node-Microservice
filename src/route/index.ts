import express from "express";
import health from "./health";
import v1 from "./v1";

const router = express.Router();

router.get("/health", health);
router.use("/v1", v1);

export default router;
