import { describe, it, expect, beforeEach, vi } from "vitest";
import request from "supertest";
import app from "../src/app";

describe("GET /health", () => {
  beforeEach(() => {
    vi.resetModules();
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
    vi.resetModules();
  });

  it("should return 200 OK with posts data", async () => {
    const response = await request(app).get("/placeholder/v1/posts");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(Array.isArray(response.body?.data)).toBe(true);
  });
});
