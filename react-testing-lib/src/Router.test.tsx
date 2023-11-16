import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('TEST APP', () => {
	test('Router test', () => {
		render(
			<MemoryRouter initialEntries={['/asdasdasd']}>
				<App />
			</MemoryRouter>
		);
		expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
		const mainLink = screen.getByTestId('main-link');
		const aboutLink = screen.getByTestId('about-link');
		// eslint-disable-next-line
		act(() => {
			userEvent.click(aboutLink);
		});
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
		// eslint-disable-next-line
		act(() => {
			userEvent.click(mainLink);
		});
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
	});
});
