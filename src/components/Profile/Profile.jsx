import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import { Box } from 'components/App/Box';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box width="380px" height="auto" mx="auto">
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
