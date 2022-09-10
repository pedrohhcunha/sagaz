export function removeNonNumericCharacters(value: string) {
  return value.replace(/\D/g, '');
}