import styled from 'styled-components';

export const Title = styled.h2``;
export const StatList = styled.ul`
  display: flex;
  width: 380px;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  list-style: none;
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.color};

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  border: ${p => p.theme.borders.normal};
`;
export const Label = styled.span`
  align-items: center;
`;
export const Percentage = styled.span``;
