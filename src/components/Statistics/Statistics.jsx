import { Box } from 'components/App/Box';
import PropTypes from 'prop-types';
import { getRandomColor } from 'utilites/randomColor';
import { Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box display="flex" justifyContent="center" as="section">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} color={getRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
