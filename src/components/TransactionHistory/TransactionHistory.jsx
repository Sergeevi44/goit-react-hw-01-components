import { Box } from 'components/App/Box';
import PropTypes from 'prop-types';
import {
  Header,
  Body,
  TableHeadRow,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      width="100%"
      mx="auto"
      border="normal"
      borderRadius="normal"
      fontFamily="monospace"
      fontWeight="bold"
      as="table"
    >
      <Header>
        <tr>
          <TableHeadRow>Type</TableHeadRow>
          <TableHeadRow>Amount</TableHeadRow>
          <TableHeadRow>Currency</TableHeadRow>
        </tr>
      </Header>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableRow>{type}</TableRow>
            <TableRow>{amount}</TableRow>
            <TableRow>{currency}</TableRow>
          </tr>
        ))}
      </Body>
    </Box>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
