import styled, { css } from 'styled-components';

type FlexProps = {
  align?: string;
  justify?: string;
  direction?: string;
};

type TitleProps = {
  size?: 'xLarge' | 'large';
};

export const flex = ({ align = 'center', justify = 'center', direction = 'row' }: FlexProps) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`;

export const fontTitle = ({ size = 'large' }: TitleProps) => css`
  font-family: var(--font-title);
  font-size: ${({ theme }) => theme.fontSize[size]};
  text-transform: uppercase;
`;

export const fontSubTitle = css`
  font-family: var(--font-text);
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
`;

export const fontText = css`
  font-family: var(--font-text);
  font-size: ${({ theme }) => theme.fontSize.small};
`;
export const fontSmallText = css`
  font-family: var(--font-text);
  font-size: ${({ theme }) => theme.fontSize.microSmall};
`;
