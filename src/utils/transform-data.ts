export function transformData(arr: string[] | { [key: string]: string[] }, key?: string) {
  if (Array.isArray(arr)) {
    return arr;
  }
  return arr[key || ''];
}
