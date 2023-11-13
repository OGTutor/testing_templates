import { square } from './square';

describe('Square', () => {
	let mockValue;

	// Before each test
	beforeEach(() => {
		// Add to database
		mockValue = Math.random();
	});

	// Once before all tests
	beforeAll(() => {});

	test('Correct value', () => {
		// expect(square(2)).toBe(4);
		// expect(square(2)).toBeLessThan(5);
		// expect(square(2)).toBeGreaterThan(3);
		// expect(square(2)).not.toBeUndefined();
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toHaveBeenCalledTimes(1);
	});

	test('Correct value', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toHaveBeenCalledTimes(0);
	});

	afterEach(() => {
		// Delete from database
		mockValue = undefined;
		jest.clearAllMocks();
	});

	afterAll(() => {});
});
