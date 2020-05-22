import sum from '../src/sum';

describe('Sum function', () => {
	test('sum of 2 and 3 equals 5', () => {
		expect(sum(2, 3)).toEqual(5);
	});
	test('sum of 2 and \'3 monkeys\' equals NaN', () => {
		expect(sum(2, '3 monkeys')).toEqual(NaN);
	});
});