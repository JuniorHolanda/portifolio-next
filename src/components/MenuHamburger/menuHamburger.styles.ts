'use client';

import { slidToLeft } from '@/styles/animations';
import { flex, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  ${flex({ direction: 'column', align: 'flex-end', justify: 'flex-start' })}
  ${padding({ space: 'large' })}
  width: 30vw;
  height: 100vw;
`;

export const SBtnIconOpen = styled.button`
  ${flex({ justify: 'flex-end', align: 'flex-end' })}
  width: 100%;

  .iconOpenMenu {
    font-size: ${({ theme }) => theme.textFont.large};
  }
`;
export const SContentMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  ${flex({ direction: 'column' })}
  ${padding({ space: 'medium' })}
  ${gap({ space: 'large' })}
  width: 30vw;
  height: 100dvh;
  background-color: #ffffff41;
  backdrop-filter: blur(30px);
  opacity: 0;
  animation: ${slidToLeft} ease-in-out 0.4s forwards;
`;

export const SBtnClose = styled.button`
  ${flex({ justify: 'flex-end', align: 'flex-end' })}
  width: 100%;

  .iconCloseMenu {
    font-size: ${({ theme }) => theme.textFont.large};
  }
`;

export const SIcon = styled.div`
  ${flex({ justify: 'space-between' })}
  ${padding({ space: 'small' })}
  ${gap({ space: 'medium' })}
  width: 100%;
`;

export const SContainerSocial = styled.div`
  ${flex({})}
  ${gap({ space: 'medium' })}
  width: fit-content;
  height: 100%;

  .containerIcon {
    ${flex({})};
    ${padding({ space: 'small' })}
    height: fit-content;
    font-size: ${({ theme }) => theme.textFont.medium};
  }
`;
