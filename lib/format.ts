export function formatNumber(
  value: number,
  options: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat('en-US', options).format(value)
}
