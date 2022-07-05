import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { Box } from 'components/App/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      m="0"
      fontFamily="monospace"
      fontWeight="bold"
      fontSize="m"
      color="text"
      as="ul"
      p="0"
    >
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Box>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
