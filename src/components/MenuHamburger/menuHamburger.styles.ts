'use client';

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
  ${padding({ space: 'medium' })}
`;

export const SIcon = styled.div`
  ${flex({})}
  ${padding({ space: 'small' })}
  ${gap({ space: 'medium' })}
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
