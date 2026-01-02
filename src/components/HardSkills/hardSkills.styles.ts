'use client';

import { flex, fontTitle } from '@/styles/mixins';
import styled from 'styled-components';

export const SWrapper = styled.section`
  ${flex({})};
  height: 100dvh;
  width: 100%;
`;

export const SInfo = styled.div`
  ${flex({ direction: 'column', align: 'flex-start' })};
  padding: ${({ theme }) => theme.spaces.large};
  gap: ${({ theme }) => theme.spaces.medium};
  position: relative;
  overflow: hidden;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  h1 {
    ${fontTitle({ size: 'xLarge' })}
    color: ${({ theme }) => theme.colors.secondary};
    z-index: 1;
    line-height: 150px;
    margin-bottom: 23px; // corrige o espaço superior que existe da font
  }

  h2 {
    ${fontTitle({ size: 'medium' })}
    font-style: italic;
  }

  p {
    z-index: 1;
    width: 70%;
  }

  img {
    height: 100%;
    position: absolute;
    transform: translateX(50%);
    right: 0;
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
    padding: ${({ theme }) => theme.spaces.medium};
    width: 100%;
    height: 8vh;
    ${fontTitle({ size: 'small', transform: 'uppercase', sub: true })};
    font-weight: 800;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SContainerCard = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.spaces.medium};
  gap: ${({ theme }) => theme.spaces.medium};
  height: 100%;
`;
