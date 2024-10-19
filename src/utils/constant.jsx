export const APIKEY = "c1b97c0823a44c9083a35aac091b098c";

const currentDate = new Date();

export const parseCurrentDate = (date) => {
  const dateObj = new Date(date);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
};

const previousWeek = new Date();
previousWeek.setDate(currentDate.getDate() - 7);

export const parsePreviousWeek = `${previousWeek.getFullYear()} 
  -
 ${String(previousWeek.getMonth() + 1).padStart(2, "0")} 
 -
  ${String(previousWeek.getDate()).padStart(2, "0")}`;
