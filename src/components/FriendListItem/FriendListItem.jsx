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


FriendListItem.propTypes = {
  friend: PropTypes.object.isRequired,
};