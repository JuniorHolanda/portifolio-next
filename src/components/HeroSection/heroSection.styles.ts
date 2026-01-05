'use client';

import { flex, fontTitle, gap, padding } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  ${flex({ align: 'flex-start' })}
  width: 100%;
`;

export const SAside = styled.aside`
  position: relative;
  ${flex({ direction: 'column', align: 'flex-end' })};
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  width: 25%;
  min-width: 350px;
`;

export const ScontainerProfile = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  ${flex({ direction: 'column' })};
  width: 60%;
  height: 40%;
  ${gap({ space: 'medium' })}
  ${padding({ space: 'medium' })}
  background-color: ${({ theme }) => theme.colors.backgroundSurface};
  border-radius: ${({ theme }) => theme.borderRadios.medium};
`;

export const ScontainerImg = styled.div`
  ${flex({})};
  width: 100%;
  height: 90%;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borderRadios.medium};
  }
`;

export const SContainerSocial = styled.div`
  ${flex({})}
  width: fit-content;
  ${gap({ space: 'small' })}
  height: fit-content;

  .containerIcon {
    ${flex({})};
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.textFont.small};
  }
`;

export const SContainerFrontEndBar = styled.div`
  height: 100vh;
  width: 10%;
  background-color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
`;

export const Scontent = styled.div`
  position: relative;
  ${flex({ align: 'flex-start', justify: 'space-between' })}
  ${padding({ space: 'xLarge' })}
  height: 100vh;
  width: 75%;
  overflow: hidden;

  img {
    position: absolute;
    transform: translateX(-50%);
    width: 40%;
    min-width: 500px;
    bottom: 0;
    left: 60%;
    z-index: 0;
  }
`;

export const SText = styled.div`
  ${flex({ direction: 'column', justify: 'center', align: 'flex-start' })}
  width: 70%;
  z-index: 1;

  h1,
  h2 {
    ${fontTitle({ size: 'xLarge' })}
    z-index: 1;
    color: ${({ theme }) => theme.colors.title};
  }

  div {
    ${flex({ direction: 'column', justify: 'center', align: 'flex-start' })}
    ${gap({ space: 'medium' })}
    width: 100%;
    z-index: 1;

    p {
      z-index: 1;
      min-width: 200px;
      color: ${({ theme }) => theme.colors.text};
      margin-left: ${({ theme }) => theme.spaces.medium};
      width: 70%;

      strong {
        background-color: ${({ theme }) => theme.colors.primary};
        padding: 0 5px;
        border-radius: ${({ theme }) => theme.borderRadios.small};
      }
    }
  }
`;
