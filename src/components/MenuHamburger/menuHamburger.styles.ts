'use client';

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  ${flex({ direction: 'column', align: 'flex-end', justify: 'flex-start' })}
  padding: ${({ theme }) => theme.spaces.large};
  width: 30vw;
  height: 100vw;

  .iconOpenMenu {
    font-size: ${({ theme }) => theme.textFont.medium};
  }
`;

export const SContentMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  ${flex({})}
  width: 30vw;
  height: 100dvh;
  background-color: #ffffff41;
  backdrop-filter: blur(30px);
  padding: ${({ theme }) => theme.spaces.large};
`;

export const SContainerSocial = styled.div`
  ${flex({})}
  width: fit-content;
  gap: ${({ theme }) => theme.spaces.small};
  height: 100%;
  gap: ${({ theme }) => theme.spaces.medium};

  .containerIcon {
    ${flex({})};
    padding: ${({ theme }) => theme.spaces.small};
    height: fit-content;
    font-size: ${({ theme }) => theme.textFont.medium};
  }
`;
