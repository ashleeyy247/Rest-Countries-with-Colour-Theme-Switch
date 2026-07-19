export function formatNumber(value) {
  const numberValue = Number(value);
  if (Number.isNaN(numberValue)) return String(value);
  return numberValue.toLocaleString("en-US");
}
