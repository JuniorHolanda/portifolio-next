import { defaultTheme } from '@/themes/defaultTheme';
import { css } from 'styled-components';

type FlexProps = {
  align?: 'center' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end';
  justify?:
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'flex-start'
    | 'flex-end';
  direction?: 'column' | 'row';
};

export const flex = ({ align = 'center', justify = 'center', direction = 'row' }: FlexProps) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
`;

type TitleProps = {
  size?: keyof typeof defaultTheme.titleFont;
  transform?: 'uppercase' | 'none' | 'lowercase';
  sub?: boolean; // true = font principal | false = font secundária
  style?: 'italic' | 'normal';
};

export const fontTitle = ({
  size = 'large',
  transform = 'uppercase',
  sub = false,
  style = 'normal',
}: TitleProps) => css`
  font-family: ${sub ? 'var(--font-text)' : 'var(--font-title)'};
  font-size: ${({ theme }) => theme.titleFont[size]};
  text-transform: ${transform};
  font-style: ${style};
`;

type TextProps = {
  size?: keyof typeof defaultTheme.textFont;
  transform?: 'uppercase' | 'none' | 'lowercase';
  weight?: '100' | '200' | '300' | '600' | '800';
  style?: 'italic' | 'normal';
};

export const fontText = ({
  size = 'small',
  transform,
  weight = '300',
  style = 'normal',
}: TextProps) => css`
  font-family: var(--font-text);
  font-size: ${({ theme }) => theme.textFont[size]};
  text-transform: ${transform};
  font-weight: ${weight};
  font-style: ${style};
`;

type spacesProps = {
  space?: keyof typeof defaultTheme.spaces;
};

export const padding = ({ space = 'medium' }: spacesProps) => css`
  padding: ${({ theme }) => theme.spaces[space]};
`;

export const gap = ({ space = 'medium' }: spacesProps) => css`
  gap: ${({ theme }) => theme.spaces[space]};
`;
