const DEFAULT_OPTIONS = {
  style: "decimal",
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
} satisfies Intl.NumberFormatOptions;

export function formatNumber({
  number: number,
  locale,
  options,
}: {
  number: number;
  locale?: string;
  options?: Intl.NumberFormatOptions;
}): string {
  return new Intl.NumberFormat(
    locale ?? "es-ES",
    options ?? DEFAULT_OPTIONS
  ).format(number);
}
