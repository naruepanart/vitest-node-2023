import { describe, expect, it } from 'vitest';
import { GradeStudent } from '../src/GradeStudent';

const testCases = [
  { score: 95, expected: 'A' },
  { score: 85, expected: 'B' },
  { score: 75, expected: 'C' },
  { score: 65, expected: 'D' },
  { score: 55, expected: 'F' },
];

describe('Calculator Tests', () => {
  for (let i = 0; i < testCases.length; i++) {
    const { score, expected } = testCases[i];
    it(`${score} returns ${expected}`, () => {
      expect(GradeStudent(score)).toBe(expected);
    });
  }
});

/* test('GradeStudent()', () => {
  expect(GradeStudent(95)).toBe('A');
}); */
