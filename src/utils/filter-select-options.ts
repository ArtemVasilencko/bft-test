export function filterSelectOptions(arr: string[], data: string[]) {
  return arr.filter(item => data.includes(item));
}
