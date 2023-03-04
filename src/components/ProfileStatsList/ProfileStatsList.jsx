import PropTypes from 'prop-types';
import {StyledUl, StyledLi} from './ProfileStatsList.styled';

export function ProfileStatsList({followers, views, likes}) {
  return (
    <StyledUl>
      <StyledLi>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </StyledLi>
      <StyledLi>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </StyledLi>
      <StyledLi>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </StyledLi>
    </StyledUl>
  );
}

ProfileStatsList.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};