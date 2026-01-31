import express from "express";

const health = (_: express.Request, res: express.Response) => {
  res.status(200).json({
    description: "OK",
    timestamp: new Date().toISOString(),
  });
};

export default health;
