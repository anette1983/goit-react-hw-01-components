import PropTypes from 'prop-types';
// і тут приймаємо пропси

export function ProfileStatsList({followers, views, likes}) {
  return (
    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
}

ProfileStatsList.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number,
    likes: PropTypes.number.isRequired,
};