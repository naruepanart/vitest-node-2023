import { describe, expect, it } from "vitest";
import { FuelCost } from "../src/FuelCost";

describe("Calculate FuelCost Tests", () => {
  const testCases = [
    { distance: 200, fuelConsumption: 26, expected: 269.2307692307692 },
  ];

  testCases.forEach((tc) => {
    const { distance, fuelConsumption, expected } = tc;
    it(`distance :${distance}: fuelConsumption:${fuelConsumption} return ${expected}`, () => {
      expect(FuelCost(distance, fuelConsumption)).toBe(expected);
    });
  });
});
