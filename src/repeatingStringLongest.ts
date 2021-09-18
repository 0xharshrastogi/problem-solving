import { RandomString } from './generateInput';
import PerformanceTest from './performanceTest';

function repeatingCharacters(str: string) {
  console.log(str);
  const charSet = new Set<string>();
  let [left, len] = [0, 0];

  for (let i = 0; i < str.length; i++) {
    if (charSet.has(str[i])) while (charSet.has(str[i])) charSet.delete(str[left++]);
    charSet.add(str[i]);

    len = Math.max(len, i - left + 1);
  }

  return len;
}
new PerformanceTest(() => repeatingCharacters(new RandomString(10).input));
