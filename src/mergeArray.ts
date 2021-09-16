import PerformanceTest from './performanceTest';

function mergeSortedArray(nums1: number[], nums2: number[]) {
  const [len1, len2] = [nums1.length, nums2.length];
  let gap = (len1 + len2) << 1;

  while (gap) {
    let i: number;
    for (i = 0; i + gap < len1; i++)
      if (nums1[i] > nums1[i + gap])
        [nums1[i], nums1[i + gap]] = [nums1[i + gap], nums1[i]];

    let j = gap > len1 ? len2 - gap : 0;

    for (; i < len1 && j < len2; i++, j++)
      if (nums1[i] > nums2[j]) [nums1[i], nums2[j]] = [nums2[j], nums1[i]];

    if (j < len2)
      for (; j + gap < len2; j++)
        if (nums2[j] > nums2[j + gap])
          [nums2[j], nums2[j + gap]] = [nums2[j + gap], nums2[j]];

    gap = gap <= 1 ? 0 : gap >> 1;
  }
}

new PerformanceTest(() => mergeSortedArray([1, 5, 9, 10, 15, 20], [2, 3, 8, 13]));
