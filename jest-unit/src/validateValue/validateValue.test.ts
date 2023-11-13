import { validateValue } from './validateValue';

describe('Value Validation', () => {
	test('Correct value', () => {
		expect(validateValue(50)).toBe(true);
	});

	test('Less correct value', () => {
		expect(validateValue(-1)).toBe(false);
	});

	test('Greater correct value', () => {
		expect(validateValue(101)).toBe(false);
	});

	test('Lower limit value', () => {
		expect(validateValue(0)).toBe(true);
	});

	test('Upper limit value', () => {
		expect(validateValue(100)).toBe(true);
	});
});
