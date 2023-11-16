import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decremented, incremented } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';

const Counter: FC = () => {
	const dispatch = useDispatch();
	const value = useSelector(getCounterValue);

	const onIncrement = () => {
		dispatch(incremented());
	};

	const onDecrement = () => {
		dispatch(decremented());
	};

	return (
		<div>
			<h1 data-testid='value-title'>{value}</h1>
			<button data-testid='increment-btn' onClick={onIncrement}>
				Increment
			</button>
			<button data-testid='decrement-btn' onClick={onDecrement}>
				Decrement
			</button>
		</div>
	);
};

export default Counter;
