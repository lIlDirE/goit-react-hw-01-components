import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className="item">
      <span className={clsx(css.status, !isOnline && css.isOutLined)}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="avatar-img" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};