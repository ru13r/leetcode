'use strict';
import f from '../../../src/structures/arrays/removeDuplicates';

const cases = [
  {
    name: '[-3,-1,-1,0,0,0,0,0]',
    input: [-3,-1,-1,0,0,0,0,0],
    output: [3,[-3,-1,0]],
  },
  {
    name: '[-1,0,0,0,0,3,3]',
    input: [-1,0,0,0,0,3,3],
    output: [3,[-1,0,3]],
  },
  {
    name: '[1,1,2]',
    input: [1,1,2],
    output: [2, [1,2]],
  },
  {
    name: '[0,0,1,1,1,2,2,3,3,4] to [0,1,2,3,4,_,...]',
    input: [0,0,1,1,1,2,2,3,3,4],
    output: [5,[0,1,2,3,4]],
  },
  {
    name: 'nums1 = [1,1] to [1]',
    input: [1,1],
    output: [1,[1]],
  },
  {
    name: 'nums1 = [1,1,1,2] to [1,2]',
    input: [1,1,1,2],
    output: [2,[1,2]],
  },
];

const testCase = (test, f) => {
  it(test.name, () => {
    const array = test.input;
    const k = f(array);
    expect(k).toStrictEqual(test.output[0]);
    expect(array).toStrictEqual(test.output[1]);
  });
};

describe('Remove duplicates',
  () => cases.forEach(test => testCase(test, f)));



