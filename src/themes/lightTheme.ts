import { defaultTheme } from './defaultTheme';

export const lightTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#d9d9d9ff',
    backgroundSurface: '#ffffffff',
    backgroundMedium: '#f3f3f3',

    primary: '#2bbf97ff', //30%  → regra dos terços
    secondary: '#706aa4ff', //20%  → regra dos terços
    mainColor: '#ffbb25ff', //10%  → regra dos terços

    title: '#706aa4ff',

    text: '#201e27ff',
    textMain: '#000000',
    textSecondary: '#d9d9d9ff',
    textSecondaryMain: '#f3f3f3',

    border: '#d6d6d6ff',
  },
};

export type theme = typeof lightTheme;
