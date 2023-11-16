import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Users, { User } from './Users';

export type AxiosResponse = {
	data: User[];
};

jest.mock('axios');

describe('USERS TEST', () => {
	let response: AxiosResponse;
	beforeEach(() => {
		response = {
			data: [
				{
					id: 1,
					name: 'Leanne Graham',
					username: 'Bret',
					email: 'Sincere@april.biz',
					address: {
						street: 'Kulas Light',
						suite: 'Apt. 556',
						city: 'Gwenborough',
						zipcode: '92998-3874',
						geo: {
							lat: '-37.3159',
							lng: '81.1496',
						},
					},
					phone: '1-770-736-8031 x56442',
					website: 'hildegard.org',
					company: {
						name: 'Romaguera-Crona',
						catchPhrase: 'Multi-layered client-server neural-net',
						bs: 'harness real-time e-markets',
					},
				},
				{
					id: 2,
					name: 'Ervin Howell',
					username: 'Antonette',
					email: 'Shanna@melissa.tv',
					address: {
						street: 'Victor Plains',
						suite: 'Suite 879',
						city: 'Wisokyburgh',
						zipcode: '90566-7771',
						geo: {
							lat: '-43.9509',
							lng: '-34.4618',
						},
					},
					phone: '010-692-6593 x09125',
					website: 'anastasia.net',
					company: {
						name: 'Deckow-Crist',
						catchPhrase: 'Proactive didactic contingency',
						bs: 'synergize scalable supply-chains',
					},
				},
				{
					id: 3,
					name: 'Clementine Bauch',
					username: 'Samantha',
					email: 'Nathan@yesenia.net',
					address: {
						street: 'Douglas Extension',
						suite: 'Suite 847',
						city: 'McKenziehaven',
						zipcode: '59590-4157',
						geo: {
							lat: '-68.6102',
							lng: '-47.0653',
						},
					},
					phone: '1-463-123-4447',
					website: 'ramiro.info',
					company: {
						name: 'Romaguera-Jacobson',
						catchPhrase: 'Face to face bifurcated interface',
						bs: 'e-enable strategic applications',
					},
				},
			],
		};
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('GET USERS', async () => {
		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
			response
		);
		render(<Users />);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		expect(axios.get).toHaveBeenCalledTimes(1);
		// eslint-disable-next-line
		screen.debug();
	});

	test('Redirect to details page', async () => {
		(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(
			response
		);
		renderWithRouter(<Users />);
		const users = await screen.findAllByTestId('user-item');
		expect(users.length).toBe(3);
		// eslint-disable-next-line
		act(() => {
			userEvent.click(users[0]);
		});
		expect(screen.getByTestId('user-page')).toBeInTheDocument();
	});
});
