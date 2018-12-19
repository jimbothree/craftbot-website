/**
 * Deep copies an object
 * This is potentionally an expensive operation. Use sparringly!
 * @param obj - The object to copy
 * @returns - A copy of the object
 */
export function deepCopy<T>(obj: T): T {
  const clone: any = { };
  for (const i in obj) {
    if (obj[i] !== null && typeof obj[i]  === 'object') {
      clone[i] = deepCopy(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }

  return clone;
}
