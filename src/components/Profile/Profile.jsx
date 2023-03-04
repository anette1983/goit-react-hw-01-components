import PropTypes from 'prop-types';
import { ProfileStatsList } from 'components/ProfileStatsList/ProfileStatsList';

// тут приймаємо пропси
export function ProfileCard({avatar, username, tag, location, stats}) {
  const {followers, views, likes} = stats;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ProfileStatsList followers={followers} views={views} likes={likes}/>
    </div>
  );
}

ProfileCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
};

// console.log('object :>> ', object);
// clo
