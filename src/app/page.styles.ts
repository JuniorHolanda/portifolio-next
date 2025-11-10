'use client';

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

export const SMain = styled.main`
  ${flex({ direction: 'column', align: 'flex-start' })};
  width: 100%;
  height: fit-content;
`;
