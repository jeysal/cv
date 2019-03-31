export const BooleanParam = 'boolean';
export const StringParam = 'string';
export const useQueryParam = (_name, type) => [
  type === BooleanParam ? false : type === StringParam ? '' : undefined,
];
