const { expect } = require("@jest/globals");
const solveCaptcha = require("..");

describe("solveCaptcha() part 1", () => {
  it("should return the sum of all digits that match the next digit in the list. (The list is circular, so the digit after the last digit is the first digit in the list).", () => {
    expect(solveCaptcha([1122])).toBe(3);
    expect(solveCaptcha([1111])).toBe(4);
    expect(solveCaptcha([1234])).toBe(0);
    expect(solveCaptcha([91212129])).toBe(9);
  });
});

describe("solveCaptcha() part 2", () => {
  it("should return the sum of all digits that match the digit halfway around the circular list.", () => {
    expect(solveCaptcha([1212], false)).toBe(6);
    expect(solveCaptcha([1221], false)).toBe(0);
    expect(solveCaptcha([123425], false)).toBe(4);
    expect(solveCaptcha([123123], false)).toBe(12);
    expect(solveCaptcha([12131415], false)).toBe(4);
  });
});
