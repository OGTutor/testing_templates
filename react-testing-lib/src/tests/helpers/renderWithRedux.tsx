import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RootState, createReduxStore } from '../../store/store';

export const renderWithRedux = (
	component: React.ReactNode,
	initialState: RootState
) => {
	const store = createReduxStore(initialState);

	return render(<Provider store={store}>{component}</Provider>);
};
