function permute<T>(array: T[], index = 0, result: T[][] = []) {
  if (index === array.length) {
    result.push(Array.from(array));
    return result;
  }

  for (let i = index; i < array.length; i++) {
    [array[index], array[i]] = [array[i], array[index]];
    permute(array, index + 1, result);
    [array[index], array[i]] = [array[i], array[index]];
  }

  return result;
}

console.log(permute('hel'.split('')).map((val) => val.join('')));
