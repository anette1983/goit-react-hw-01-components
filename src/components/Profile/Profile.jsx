import PropTypes from 'prop-types';
import { ProfileStatsList } from 'components/ProfileStatsList/ProfileStatsList';
import { StyledDiv, StyledDescrDiv, StyledUsernameP, StyledTagP } from './Profile.styled';

// тут приймаємо пропси
export function ProfileCard({avatar, username, tag, location, stats}) {
  const {followers, views, likes} = stats;
  return (
    <StyledDiv className="profile">
      <StyledDescrDiv>
        <img src={avatar} alt={username} className="avatar" />
        <StyledUsernameP>{username}</StyledUsernameP>
        <StyledTagP>@{tag}</StyledTagP>
        <StyledTagP>{location}</StyledTagP>
      </StyledDescrDiv>
      <ProfileStatsList followers={followers} views={views} likes={likes}/>
    </StyledDiv>
  );
}

ProfileCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    // stats: PropTypes.object.isRequired
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  })
};

// console.log('object :>> ', object);
// clo
