export const kebabize = (str: string) =>
  str.replace(/[A-Z]/g, ($) => `-${$.toLowerCase()}`);

const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

const isObject = (item: object) =>
  typeof item === "object" && item?.constructor === Object;

export const camelCaseObjectDeep = (value: any): object => {
  if (isObject(value)) {
    const obj = {} as any;
    const keys = Object.keys(value);

    keys.forEach((key) => {
      const k = camelize(key);
      const v = value[key as keyof typeof value];
      obj[k] = camelCaseObjectDeep(v);
    });

    return obj;
  }
  return value;
};

export const kebabCaseObjectDeep = (value: any): object => {
  if (isObject(value)) {
    const obj = {} as any;
    const keys = Object.keys(value);

    keys.forEach((key) => {
      const k = kebabize(key);
      const v = value[key as keyof typeof value];
      obj[k] = kebabCaseObjectDeep(v);
    });

    return obj;
  }
  return value;
};
