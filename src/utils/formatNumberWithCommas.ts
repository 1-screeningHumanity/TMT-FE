export default function formatNumberWithCommas(
  number: number | string | null | undefined,
) {
  if (!number) {
    return 0
  }
  number = Number(number)
  return number.toLocaleString()
}
