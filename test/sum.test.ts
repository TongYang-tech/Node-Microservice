import { expect, test } from "vitest";
import { sum } from "./sum";

test("sum functions adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
