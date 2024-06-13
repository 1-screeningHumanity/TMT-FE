export function parseDate(date: string): string {
  if (date.length !== 8 || isNaN(Number(date))) {
    throw new Error('Invalid date format. Expected a string in YYYYMMDD format.');
  }

  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  return `${year}/${month}/${day}`;
}