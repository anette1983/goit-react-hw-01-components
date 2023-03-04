import PropTypes from 'prop-types';
import {StyledLi, StyledSpan} from './FriendListItem.styled';


export function FriendListItem({friend}) {
    
    const {avatar, name, isOnline} = friend;
    return (
        <StyledLi>
        <StyledSpan isOnline={isOnline}>{isOnline}</StyledSpan>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </StyledLi>
    );
  }


// FriendListItem.propTypes = {
//   friend: PropTypes.object.isRequired,
// };
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
}