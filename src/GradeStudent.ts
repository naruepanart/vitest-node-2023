/**
 * If the score is greater than or equal to 90, return "A", else if the score is greater than or equal
 * to 80, return "B", else if the score is greater than or equal to 70, return "C", else if the score
 * is greater than or equal to 60, return "D", else return "F"
 * @param {number} score - number
 * @returns A function
 */
export const GradeStudent = (score: number) => {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
};