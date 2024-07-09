const truncate = (str: string, length: number) =>
  str.length <= length ? str : str.slice(0, length);

export { truncate };
