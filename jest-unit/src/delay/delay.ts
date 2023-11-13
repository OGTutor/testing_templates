export const delay = (
	callback: () => void,
	ms: number
): Promise<() => number> => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(callback()!!);
		}, ms);
	});
};

delay(() => 5 + 5, 1000).then(res => console.log(res));
