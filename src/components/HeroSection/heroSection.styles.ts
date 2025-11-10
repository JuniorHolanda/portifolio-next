'use client';

import { flex, fontSmallText, fontText, fontTitle } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  ${flex({ align: 'flex-start' })}
  width: 100%;
  height: 95vh;
`;

export const SAside = styled.aside`
  ${flex({ direction: 'column' })};
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  width: 20%;
`;

export const ScontainerProfile = styled.div`
  ${flex({ direction: 'column' })};
  width: 60%;
  height: 40%;
  gap: ${({ theme }) => theme.spaces.medium};
  padding: ${({ theme }) => theme.spaces.medium};
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
  gap: ${({ theme }) => theme.spaces.small};
  ${fontText}
  height: fit-content;

  .containerIcon {
    ${flex({})};
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const Ssection = styled.section`
  ${flex({ direction: 'column' })}
  width: 80%;
  height: 100%;
`;

export const Scontent = styled.div`
  padding: ${({ theme }) => theme.spaces.large};
  ${flex({ align: 'flex-start', direction: 'column' })}
  position: relative;
  height: 100vh;

  img {
    position: absolute;
    transform: translateX(-50%);
    width: 40%;
    bottom: 0;
    left: 60%;
    z-index: 0;
  }

  h1,
  h2 {
    ${fontTitle({ size: 'xLarge' })}
    z-index: 1;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    ${fontSmallText}
    z-index: 1;
    width: 30%;
    color: ${({ theme }) => theme.colors.text};
  }
`;
