import { flex, gap } from '@/styles/mixins';
import styled from 'styled-components';

export const SHeader = styled.header`
  ${flex({ align: 'center', justify: 'center' })}
  width: 100%;
  height: 5vh;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ease-in-out 0.3s;
  padding: 0 ${({ theme }) => theme.spaces.xLarge};
  gap: 0 ${({ theme }) => theme.spaces.medium};
`;

export const SContainerLogo = styled.span`
  ${flex({ justify: 'flex-start' })}
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  width: fit-content;
  height: 100%;
`;

export const SNav = styled.nav`
  ${flex({})};
  padding: 0 ${({ theme }) => theme.spaces.medium};
  flex: 2;

  ul {
    ${flex({ justify: 'space-around' })}
    width: 100%;
    ${gap({ space: 'medium' })};
    font-weight: 400;
    text-transform: uppercase;

    li {
      ${flex({})}
      cursor: pointer;
      padding: 0 ${({ theme }) => theme.spaces.medium};
      height: 100%;
    }
  }
`;

export const SContainerSocial = styled.div`
  ${flex({})}
  width: fit-content;
  ${gap({ space: 'small' })};
  height: 100%;

  .containerIcon {
    ${flex({})};
    height: 100%;
  }
`;
