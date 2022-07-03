import styled from 'styled-components';

export const Header = styled.thead`
  background-color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Body = styled.tbody`
  background-color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.xs};
`;
export const TableHeadRow = styled.th`
  border: ${p => p.theme.borders.normal};
`;
export const TableRow = styled.td`
  border: ${p => p.theme.borders.normal};
`;
