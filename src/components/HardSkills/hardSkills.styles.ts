'use client';

import { flex, fontText, fontTitle } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  ${flex({})};
  height: 100dvh;
  width: 100%;
`;

export const SInfo = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spaces.large};
  ${flex({ direction: 'column', align: 'flex-start' })};
  width: 50%;
  height: 100%;

  h1 {
    ${fontTitle({ size: 'xLarge' })}
    z-index: 1;
    line-height: 150px;
  }

  p {
    z-index: 1;
    width: 50%;
  }

  img {
    height: 100%;
    position: absolute;
    transform: translateX(50%);
    z-index: 0;
  }
`;

export const SContent = styled.div`
  ${flex({})};
  width: 50%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces.large};
`;

export const SContainerSkills = styled.div`
  ${flex({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spaces.large};
  gap: ${({ theme }) => theme.spaces.large};
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.backgroundMedium};
  border-radius: ${({ theme }) => theme.borderRadios.large};
  overflow-y: scroll; /* ou auto */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge antigo */
`;

export const SContainerStack = styled.div`
  ${flex({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.backgroundSurface};
  border-radius: ${({ theme }) => theme.borderRadios.large};
  overflow: clip;

  header {
    ${flex({ justify: 'flex-start' })}
    height: fit-content;
    width: 100%;
    height: 8vh;
    padding: ${({ theme }) => theme.spaces.medium};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    ${fontText}
    font-weight: 800;
    text-transform: capitalize;
  }
`;

export const SContainerCard = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.spaces.medium};
  gap: ${({ theme }) => theme.spaces.medium};
  height: 100%;
`;
