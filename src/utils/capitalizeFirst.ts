export const capitalizeFirstLetter = (text: string): string =>
  String(text).charAt(0).toUpperCase() + String(text).slice(1);
