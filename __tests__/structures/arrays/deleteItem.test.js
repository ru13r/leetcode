'use strict';
import f from '../../../src/structures/arrays/deleteItem';

const cases = [
  {
    name: 'nums = [3,2,2,3], val = 3',
    input: [[3,2,2,3], 3],
    output: [2,[2,2,null, null]],
  },
  {
    name: 'nums = [0,1,2,2,3,0,4,2], val = 2',
    input: [[0,1,2,2,3,0,4,2], 2],
    output: [5, [0,1,4,0,3,null,null,null]],
  },
];

const testCase = (test, f) => {
  it(test.name, () => {
    const [nums, val] = test.input;
    const k = f(nums, val);
    expect(nums).toStrictEqual(test.output[1]);
    expect(k).toStrictEqual(test.output[0]);
  });
};

describe('Delete Item',
  () => cases.forEach(test => testCase(test, f)));



