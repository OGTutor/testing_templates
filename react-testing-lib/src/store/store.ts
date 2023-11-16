import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export const createReduxStore = (initialState: RootState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
