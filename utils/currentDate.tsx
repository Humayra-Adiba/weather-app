import { format } from "date-fns";

export const getCurrentDate = () => {
  const currentDate = format(new Date(), 'EEEE, MMMM d, yyyy');
  return currentDate;
};
