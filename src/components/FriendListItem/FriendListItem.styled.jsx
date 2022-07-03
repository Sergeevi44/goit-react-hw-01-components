import styled from 'styled-components';

export const Status = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${p => (p.isOnline ? 'yellowgreen' : 'red')};
  border-radius: ${p => p.theme.radii.round};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
