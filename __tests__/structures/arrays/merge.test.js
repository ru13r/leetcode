'use strict';
import f from '../../../src/structures/arrays/merge';

const cases = [
  {
    name: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3',
    input: [[1,2,3,0,0,0], 3, [2,5,6], 3],
    output: [1,2,2,3,5,6],
  },
  {
    name: 'nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6,0], n = 3',
    input: [[1,2,3,0,0,0], 3, [2,5,6,0], 3],
    output: [1,2,2,3,5,6],
  },
  {
    name: 'nums1 = [-1,0,0,3,3,3,0,0,0], nums2 = [1, 2, 2]',
    input: [[-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3],
    output: [-1,0,0,1,2,2,3,3,3],
  },
  {
    name: 'nums1 = [1], m = 1, nums2 = [], n = 0',
    input: [[1], 1, [], 0],
    output: [1],
  },
];

const testCase = (test, f) => {
  it(test.name, () => {
    const [array, m, array2, n] = test.input;
    f(array, m, array2, n);
    expect(array).toStrictEqual(test.output);
  });
};

describe('Merge sorted arrays',
  () => cases.forEach(test => testCase(test, f)));



