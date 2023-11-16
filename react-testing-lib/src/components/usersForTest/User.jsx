const User = ({ user, onDelete }) => {
	return (
		<div>
			{user.name}
			<button id='user-delete' onClick={() => onDelete(user.id)}>
				Delete
			</button>
		</div>
	);
};

export default User;
