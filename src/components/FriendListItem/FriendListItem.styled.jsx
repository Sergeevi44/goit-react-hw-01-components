import styled from 'styled-components';

export const Item = styled.li`
  width: 380px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid lightgray;
  margin-bottom: 2px;
`;
export const Status = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${p => (p.isOnline ? 'yellowgreen' : 'red')};
  border-radius: ${p => p.theme.radii.round};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;
