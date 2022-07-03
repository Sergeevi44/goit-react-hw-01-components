import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  typography,
  layout,
  flexbox,
  border,
  position
);
