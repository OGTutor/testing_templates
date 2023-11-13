import axios from 'axios';
import { mapArrToStrings } from '../mapArrToStrings/mapArrToStrings';

export type user = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const getData = async () => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const userIds = response.data.map((user: user) => user.id);
		return mapArrToStrings(userIds);
	} catch (error) {
		console.log(error);
	}
};
