import express from "express";
import axios from "axios";

const posts = async (_: express.Request, res: express.Response) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const data = response.data;

    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export default posts;
