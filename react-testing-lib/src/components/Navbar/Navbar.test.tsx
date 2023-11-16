import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('NAVBAR TESTS', () => {
	test('main link', () => {
		renderWithRouter(<Navbar />);
		const mainLink = screen.getByTestId('main-link');
		// eslint-disable-next-line
		act(() => {
			userEvent.click(mainLink);
		});
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
	});
	test('about link', () => {
		renderWithRouter(<Navbar />);
		const aboutLink = screen.getByTestId('about-link');
		// eslint-disable-next-line
		act(() => {
			userEvent.click(aboutLink);
		});
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
	});
	test('users link', () => {
		renderWithRouter(<Navbar />);
		const usersLink = screen.getByTestId('users-link');
		// eslint-disable-next-line
		act(() => {
			userEvent.click(usersLink);
		});
		expect(screen.getByTestId('users-page')).toBeInTheDocument();
	});
});
