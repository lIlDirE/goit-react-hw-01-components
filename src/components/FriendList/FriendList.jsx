import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import clsx from 'clsx';

export function FriendList ({friends}) {

	return <ul className={css.friendsList}>
		{friends.map(friend => 
			<li key={friend.id} className="item">
			<span className={clsx(css.status, !friend.isOnline && css.isOutLined)}>{friend.isOnline}</span>
			<img className="avatar" src={friend.avatar} alt="avatar-img" width="48" />
			<p className="name">{friend.name}</p>
			</li>
	)}
	</ul>
}

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool.isRequired,
		avatar: PropTypes.string.isRequired,
	}))
}