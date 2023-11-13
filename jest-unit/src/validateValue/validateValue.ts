export const validateValue = (value: number): boolean => {
	if (value < 0 || value > 100) {
		return false;
	}
	return true;
};
