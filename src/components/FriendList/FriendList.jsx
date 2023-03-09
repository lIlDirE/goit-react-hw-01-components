import css from './FriendList.module.css';
import FriendListItem from './FriendListItem.jsx';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}