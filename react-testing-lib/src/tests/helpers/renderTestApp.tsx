import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../routes/AppRouter';
import { RootState, createReduxStore } from '../../store/store';

interface Options {
	route: string;
	initialState: RootState;
}

export const renderTestApp = (component: React.ReactNode, options: Options) => {
	const store = createReduxStore(options?.initialState);

	return render(
		<Provider store={store}>
			<MemoryRouter initialEntries={[options?.route]}>
				<AppRouter />
				{component}
			</MemoryRouter>
		</Provider>
	);
};
