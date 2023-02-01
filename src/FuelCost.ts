/**
 * It takes two numbers as arguments, divides the first by the second, multiplies the result by 35, and
 * returns the result
 * @param {number} distance - the distance in miles
 * @param {number} fuelConsumption - The number of miles per gallon the car gets.
 * @returns The cost of fuel for a given distance and fuel consumption.
 */
export const FuelCost = (distance: number, fuelConsumption: number) => {
  const fuelPrice = 35;
  const gallonsOfFuel = distance / fuelConsumption;
  return gallonsOfFuel * fuelPrice;
};
