import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.jsx';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({avatar,name,isOnline, id}) => (
                  <FriendListItem
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                  key={id}
                />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      key: PropTypes.number.isRequired,
     })
)};
