export function parseDate(date: string): string {
  if (date.length !== 8 || isNaN(Number(date))) {
    throw new Error('Invalid date format. Expected a string in YYYYMMDD format.');
  }

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${year}/${month}/${day}`;
}

export function parseDateTime(datetimeString : string) {
  const date = new Date(datetimeString);

  // Extract month and day
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const datePart = `${month}.${day}`;

  // Extract hours and minutes
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const timePart = `${hours}:${minutes}`;

  return { datePart, timePart };
}