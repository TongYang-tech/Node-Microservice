import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import request from "supertest";
import app from "../src/app";
import axios from "axios";

vi.mock("axios");

describe("GET /health", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should return 200 OK with description and timestamp", async () => {
    const response = await request(app).get("/placeholder/health");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("description", "OK");
    expect(response.body).toHaveProperty("timestamp");
  });
});

describe("GET /v1/posts", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should return 200", async () => {
    axios.get = vi.fn().mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "Test Posts",
          body: "Test Body",
        },
      ],
    });
    const response = await request(app).get("/placeholder/v1/posts");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body?.data)).toBe(true);
  });

  it("should return 500 internal server error", async () => {
    axios.get = vi.fn().mockRejectedValue(new Error("Unknown error"));
    const response = await request(app).get("/placeholder/v1/posts");
    expect(response.status).toBe(500);
  });
});
