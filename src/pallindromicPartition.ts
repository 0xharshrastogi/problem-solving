const strHash = new Map<string, boolean>();

function isPallindromic(str: string): boolean {
  if (strHash.has(str)) return <boolean>strHash.get(str);
  const len = str.length;

  for (let i = 0; i < len >> 1; i++)
    if (str[i] !== str[len - 1 - i]) {
      strHash.set(str, false);
      return false;
    }

  strHash.set(str, true);
  return true;
}

function pallindromicPartition(str: string) {
  const result: string[][] = [];

  return (function calc(path: string[], index: number) {
    if (index === str.length) {
      result.push(Array.from(path));
      return;
    }

    for (let i = index; i < str.length; i++) {
      if (isPallindromic(str.substring(index, i))) {
        path.push(str.substring(index, i - index + 1));
        calc(path, index + 1);
        path.pop();
      }
    }

    return result;
  })([], 0);
}

console.log(pallindromicPartition('aabb'));
