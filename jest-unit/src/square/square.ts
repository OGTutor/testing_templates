export const square = (number: number): number => {
	if (number === 1) {
		return number;
	}
	return Math.pow(number, 2);
};
