export const toKebabCase = (str: string) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};
