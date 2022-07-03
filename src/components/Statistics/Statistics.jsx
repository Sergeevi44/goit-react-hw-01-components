import { Box } from 'components/App/Box';
import PropTypes from 'prop-types';
import { getRandomColor } from 'utilites/randomColor';
import { Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box display="flex" justifyContent="center" as="section">
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id} color={getRandomColor()}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
