import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../components/users/Users';
import UsersForTest from '../components/usersForTest/UsersForTest';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import HelloWorld from '../pages/HelloWorld';
import MainPage from '../pages/MainPage';
import UserDetailsPage from '../pages/UserDetailsPage';

const AppRouter: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/hello' element={<HelloWorld />} />
			<Route path='/about' element={<AboutPage />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users-test' element={<UsersForTest />} />
			<Route path='/users/:id' element={<UserDetailsPage />} />
			<Route path='/*' element={<ErrorPage />} />
		</Routes>
	);
};

export default AppRouter;
