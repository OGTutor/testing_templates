import { FC, useState } from 'react';

const HelloWorld: FC = () => {
	const [value, setValue] = useState('');
	const [visible, setVisible] = useState(false);

	const toggle = () => value === 'hello' && setVisible(prev => !prev);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<div>
			<input onChange={onChange} id='search' type='text' />
			<button onClick={toggle} id='toggle'>
				HELLO WORLD
			</button>
			{visible && <h1 id='hello'>HELLO WORLD</h1>}
		</div>
	);
};

export default HelloWorld;
