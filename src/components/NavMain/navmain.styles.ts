import { flex, fontText, gap } from '@/styles/mixins';
import styled from 'styled-components';

type SwrapperProps = {
  $width: string;
  $align: 'flex-end' | 'center';
};

export const SWrapper = styled.section<SwrapperProps>`
  ${({ $align }) => flex({ align: $align, justify: 'flex-end' })}
  text-align: end;
  width: ${({ $width }) => $width};
  height: 100%;
  z-index: 1;

  nav {
    z-index: 1;
    position: relative;
    ${flex({ direction: 'column', align: 'flex-end', justify: 'center' })};
    width: 100%;
    height: fit-content;
    border-right: 2px solid ${({ theme }) => theme.colors.text};

    .arrowElementVisual {
      position: absolute;
      bottom: -7px;
      right: -12px;
      font-weight: bold;
      font-size: 23px;
    }

    ul {
      ${flex({ direction: 'column', align: 'flex-end', justify: 'center' })};
      width: 100%;

      li {
        cursor: pointer;
        ${fontText({ style: 'normal', weight: '600' })}
        border-bottom: 2px solid ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.text};
        width: 70%;
        padding: 30px;
        transition: all ease-in-out 0.3s;

        &:last-child {
          border: none;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.secondary};
          transform: translateX(-10px);
          border-color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;
