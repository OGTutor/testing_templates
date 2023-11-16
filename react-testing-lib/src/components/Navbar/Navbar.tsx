import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
	return (
		<div>
			<Link to='/' data-testid='main-link'>
				Main
			</Link>
			<Link to='/about' data-testid='about-link'>
				About
			</Link>
			<Link to='/users' data-testid='users-link'>
				Users
			</Link>
		</div>
	);
};

export default Navbar;
