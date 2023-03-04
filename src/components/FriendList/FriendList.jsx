import PropTypes from 'prop-types';
import { StyledSection, StyledUl } from './FriendList.styled';


import { FriendListItem } from "../FriendListItem/FriendListItem";

export function FriendList({ friends }) {
    return (
   
      <StyledSection>
        <StyledUl>
          {friends.map(friend => {
           return <FriendListItem key={friend.id} friend={friend}/>
          })}
        </StyledUl>
      </StyledSection>
    );
  }


// FriendList.propTypes = {
//   friends: PropTypes.array.isRequired,
// };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
};