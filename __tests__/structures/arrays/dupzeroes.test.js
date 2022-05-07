'use strict';
import f from '../../../src/structures/arrays/dupzeroes';

const cases = [
  {
    name: '[0]',
    input: [[0]],
    output: [0],
  },
  {
    name: '[1, 0, 3, 2]',
    input: [[1, 0, 3, 2]],
    output: [1, 0, 0, 3],
  },
  {
    name: '[0, 0, 0]',
    input: [[0, 0, 0]],
    output: [0, 0, 0],
  },
];


const testCase = (test, f) => {
  it(test.name, () => {
    const array = test.input[0];
    f(array);
    expect(array).toStrictEqual(test.output);
  });
};

describe('duplicate zeroes',
  () => cases.forEach(test => testCase(test, f)));



