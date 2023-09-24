export function formatDateToDDMMYYYY(date) {
    // Ensure the input is a Date object
    if (!(date instanceof Date)) {
      return "Invalid Date";
    }
  
    // Get day, month, and year
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Note: Month is 0-based, so we add 1
    const year = date.getFullYear();
  
    // Combine the parts into the desired format
    return `${day}-${month}-${year}`;
  }