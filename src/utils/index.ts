export function getInitials(name: string): string {
  const normalizedWords = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ");

  const initials = normalizedWords
    .filter((word, index) => index === 0 || index === 1) // Solo "Miguel" y "Ángel"
    .map((word) => word.charAt(0).toUpperCase()) // Toma la primera letra en mayúscula
    .join("");

  return initials;
}
