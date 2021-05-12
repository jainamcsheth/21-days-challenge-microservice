/**
 * Calculates the differnce between two Dates.
 * @param day1 {Date} First date
 * @param day2 {Date} Second Date
 * @returns {number} Difference in days (conveted to Math.floor)
 */
export const getDaysDifference = (day1: Date, day2: Date): number => {
  const differenceInTime = day1.getTime() - day2.getTime();
  const differnceInDays = differenceInTime / (1000 * 3600 * 24);
  return Math.floor(differnceInDays);
};
