import { flex } from '@/styles/mixins';
import styled from 'styled-components';
// flex({}) → vazio é default = align: center / justfy: center / direction: row

type SContainerThemeProps = {
  $toggle: 'light' | 'dark';
};

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
    gap: ${({ theme }) => theme.spaces.medium};
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
  gap: ${({ theme }) => theme.spaces.small};
  height: 100%;

  .containerIcon {
    ${flex({})};
    height: 100%;
  }
`;
export const SContainerTheme = styled.div<SContainerThemeProps>`
  position: relative;
  ${flex({})}
  width: 60px;
  height: 60%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadios.large};

  input[type='checkbox'] {
    appearance: none; /* remove estilo padrão */
    width: 100%;
    height: 100%;
    border: none;
    cursor: pointer;
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondary};

    &::after {
      content: '';
      display: flex;
      width: 50px;
      height: 50px;
      background-color: ${({ theme }) => theme.colors.backgroundBase};
      transform: translate(-50%, -50%);
      position: absolute;
      z-index: 1;
      border-radius: 300px;
      top: 50%;
      transition: all ease-in-out 0.3s;
      left: ${({ $toggle }) => ($toggle === 'light' ? '20%' : '80%')};
    }
  }
  .containerIconSun {
    color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 12px;
    color: ${({ theme }) => theme.colors.mainColor};
  }
  .containerIconMoon {
    color: ${({ theme }) => theme.colors.mainColor};
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    right: -3px;
  }
`;
