import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../routes/AppRouter';

export const renderWithRouter = (
	component: React.ReactNode,
	initialRoute: string = '/'
) => {
	return render(
		<MemoryRouter initialEntries={[initialRoute]}>
			<AppRouter />
			{component}
		</MemoryRouter>
	);
};
