// @ts-nocheck
import { getCounterValue } from './getCounterValue';

describe('Get Counter Value', () => {
	test('Work with empty state', () => {
		expect(getCounterValue({})).toBe(100);
	});

	test('Work with filled state', () => {
		expect(
			getCounterValue({
				counter: {
					value: 100,
				},
			})
		).toBe(100);
	});
});
