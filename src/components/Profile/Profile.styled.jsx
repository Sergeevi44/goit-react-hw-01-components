import styled from 'styled-components';

export const Description = styled.div`
  background-color: ${p => p.theme.colors.muted};
  margin-left: auto;
  margin-right: auto;
`;
export const Avatar = styled.img`
  width: 280px;
  height: 280px;
  border-radius: ${p => p.theme.radii.round};

  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const Name = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Tag = styled.p`
  text-align: center;
  margin-bottom: ${p => p.theme.space[0]};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.primary};
`;
export const Location = styled.p`
  text-align: center;
  margin-bottom: ${p => p.theme.space[0]};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondary};
`;
export const Stats = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;
export const StatsItem = styled.li`
  width: 33%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${p => p.theme.borders.normal};

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.accent};
`;
export const Label = styled.span``;
export const Quantity = styled.span``;
