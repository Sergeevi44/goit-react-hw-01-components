import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Box } from 'components/App/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      p="space[0]"
      m="space[0]"
      fontFamily="monospace"
      fontWeight="bold"
      fontSize="m"
      color="text"
    >
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Box>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
