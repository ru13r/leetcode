import sum from './sum';

(function main() {
	console.log('Sum of 1 and 2 equals to %d', sum(1, 2));

	// test async-await
	(async function testAsync() {
		let aw = await sum(2, 3);
		console.log('Async sum of 1 and 2 equals to %d', aw);
	})();

	//test rest-spread
	let obj = {
		a: 'A',
		b: 'B',
		c: 'C'
	};
	let { a, b } = { ...obj };
	console.log(a + ' and ' + b);
	return 0;
})();