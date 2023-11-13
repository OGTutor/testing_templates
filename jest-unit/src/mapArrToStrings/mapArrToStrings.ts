export const mapArrToStrings = (arr: any[]): string[] => {
	return arr.filter(item => Number.isInteger(item)).map(String);
};
