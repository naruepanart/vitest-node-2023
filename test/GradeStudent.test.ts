import { describe, it, assert } from "vitest";
import { GradeStudent } from "../src/GradeStudent";

describe("Calculator Tests", () => {
  const testCases = [
    { score: 90, expected: "A" },
    { score: 91, expected: "A" },
    { score: 80, expected: "B" },
    { score: 89, expected: "B" },
    { score: 70, expected: "C" },
    { score: 79, expected: "C" },
    { score: 60, expected: "D" },
    { score: 69, expected: "D" },
    { score: 0, expected: "F" },
    { score: 59, expected: "F" },
  ];

  testCases.forEach((tc) => {
    const { score, expected } = tc;
    it(`${score} returns ${expected}`, () => {
      assert.equal(GradeStudent(score), expected);
    });
  });
});
