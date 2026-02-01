import { describe, it, vi, beforeEach, afterEach, expect } from "vitest";
import { fs, vol } from "memfs";

// Mock the fs module to use memfs
// Mock the fs/promises module to use memfs's fs.poromises
vi.mock("fs", () => ({
  default: fs,
}));
vi.mock("fs/promises", () => fs.promises);

import { getSecret } from "./getsecret";

describe("getSecret", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should retrieve secret", () => {
    vol.fromJSON({
      "/etc/secrets/myscret/API_KEY": "12345",
    });
    const secret = getSecret("API_KEY");
    expect(secret).toBe("12345");
  });

  it("should error", () => {
    const secret = getSecret("DB_PASSWORD");
    expect(secret).toBe(null);
  });
});
