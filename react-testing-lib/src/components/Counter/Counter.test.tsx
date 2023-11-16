import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter Test', () => {
	test('router', async () => {
		const { getByTestId } = renderTestApp(null, {
			route: '/',
			initialState: { counter: { value: 10 } },
		});
		// eslint-disable-next-line
		const incrementBtn = getByTestId('increment-btn');
		// eslint-disable-next-line
		expect(getByTestId('value-title')).toHaveTextContent('10');
		// eslint-disable-next-line
		act(() => {
			userEvent.click(incrementBtn);
		});
		// eslint-disable-next-line
		expect(getByTestId('value-title')).toHaveTextContent('11');
	});
});
