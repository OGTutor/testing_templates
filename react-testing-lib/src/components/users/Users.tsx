import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type Geo = {
	lat: string;
	lng: string;
};

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
};

const Users: FC = () => {
	const [users, setUsers] = useState<User[]>([]);

	const loadUsers = async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		setUsers(response.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div data-testid='users-page'>
			{users.map(user => (
				<Link to={`/users/${user.id}`} key={user.id} data-testid='user-item'>
					{user.name}
				</Link>
			))}
		</div>
	);
};

export default Users;
