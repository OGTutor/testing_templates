import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
	test('Heading, button & input', () => {
		render(<App />);
		const helloWorldElement = screen.getByText(/hello world/i);
		const buttonElement = screen.getByRole('button');
		const inputElement = screen.getByPlaceholderText(/input value/i);

		expect(helloWorldElement).toBeInTheDocument();
		expect(buttonElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();

		expect(inputElement).toMatchSnapshot();
	});

	test('Query, find & style', async () => {
		render(<App />);
		// eslint-disable-next-line
		screen.debug();
		const helloWorldElementQuery = screen.queryByText(/hello2/i);
		expect(helloWorldElementQuery).toBeNull();
		const helloWorldElementFind = await screen.findByText(/data/i);
		expect(helloWorldElementFind).toBeInTheDocument();
		expect(helloWorldElementFind).toHaveStyle({ color: 'red' });
		// eslint-disable-next-line
		screen.debug();
	});

	test('INPUT, CLICK EVENT & get', () => {
		render(<App />);
		// input
		// eslint-disable-next-line

		const input = screen.getByPlaceholderText(/input value/i);
		expect(screen.queryByTestId('value-elem')).toContainHTML('');
		fireEvent.input(input, {
			target: { value: 'value' },
		});
		// USER ACTION EMULATION

		// userEvent.type(input, 'value');
		expect(screen.queryByTestId('value-elem')).toContainHTML('value');

		// button
		// eslint-disable-next-line

		const button = screen.getByTestId('toggle-btn');
		expect(screen.queryByTestId('toggle-elem')).toBeNull();
		fireEvent.click(button);
		expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
		fireEvent.click(button);
		expect(screen.queryByTestId('toggle-elem')).toBeNull();
	});
});
