import { describe, expect, it } from "vitest";
import { FuelCost } from "../src/FuelCost";

const testCases = [
  { distance: 200, fuelConsumption: 26, expected: 269.2307692307692 },
  /* { distance: 400, fuelConsumption: 16, expected: "B" },
  { distance: 400, fuelConsumption: 16, expected: "C" },
  { distance: 400, fuelConsumption: 16, expected: "D" },
  { distance: 400, fuelConsumption: 16, expected: "F" }, */
];

describe("Calculate FuelCost Tests", () => {
  for (let i = 0; i < testCases.length; i++) {
    const { distance, fuelConsumption, expected } = testCases[i];
    it(`distance :${distance}: fuelConsumption:${fuelConsumption} return ${expected}`, () => {
      expect(FuelCost(distance, fuelConsumption)).toBe(expected);
    });
  }
});
