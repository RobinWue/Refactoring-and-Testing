import { checkDuplicate } from "../src/checkDuplicate";

describe("checkDuplicate", () => {
  it("should return true if the todo is a duplicate", () => {
    const todos = ["buy milk", "do laundry"];
    const result = checkDuplicate("buy milk", todos);
    expect(result).toBe(true);
  });

  it("should return false if the todo is not a duplicate", () => {
    const todos = ["buy milk", "do laundry"];
    const result = checkDuplicate("clean house", todos);
    expect(result).toBe(false);
  });
});
