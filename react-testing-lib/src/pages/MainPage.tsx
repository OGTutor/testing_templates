import { FC } from 'react';
import Counter from '../components/Counter/Counter';

const MainPage: FC = () => {
	return (
		<div data-testid='main-page'>
			MAIN PAGE
			<Counter />
		</div>
	);
};

export default MainPage;
