export const formatMoney = (value: number | null | undefined) => {
  if (value == null) return '-';
  return `$${value.toLocaleString()}M`;
};

export const formatPercent = (value: number | null | undefined) => {
  if (value == null) return '-';
  return `${value}%`;
};