import { mapArrToStrings } from './mapArrToStrings';

describe('MapArrToStrings', () => {
	test('Correct value', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	});

	test('Mixed array', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'some string'])).toEqual([
			'1',
			'2',
			'3',
		]);
	});

	test('Empty array', () => {
		expect(mapArrToStrings([])).toEqual([]);
	});

	test('Negation', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
	});
});
