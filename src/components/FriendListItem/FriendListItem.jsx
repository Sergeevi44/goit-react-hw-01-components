import { Box } from 'components/App/Box';
import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      width="380px"
      mb="2px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border="normal"
      as="li"
    >
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Box>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
