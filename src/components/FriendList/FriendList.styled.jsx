import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
`;
