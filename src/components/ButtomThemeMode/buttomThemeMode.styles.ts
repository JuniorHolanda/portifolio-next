'use client';

import { flex } from '@/styles/mixins';
import styled from 'styled-components';

type SContainerThemeProps = {
  $toggle: 'light' | 'dark';
};

export const SContainerTheme = styled.div<SContainerThemeProps>`
  position: relative;
  ${flex({})}
  width: 60px;
  height: 40px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadios.large};
  border: solid #00000062 1px;

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
      width: 40px;
      height: 40px;
      background-color: ${({ theme }) => theme.colors.primary};
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
