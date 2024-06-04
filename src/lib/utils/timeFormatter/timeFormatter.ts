// @ts-nocheck
import { format, isThisYear } from "date-fns";

export const formatShortDate = (time) => {
  if (!time) {
    return "Wrong time formate"; // or some default value
  }

  const parsedTime = typeof time === "string" ? Date.parse(time) : time;

  if (isNaN(parsedTime)) {
    return ""; // or handle the invalid input as needed
  }

  const _date = new Date(parsedTime);

  return isThisYear(_date) ? format(_date, "MMM d") : format(_date, "MMM d, y");
};
