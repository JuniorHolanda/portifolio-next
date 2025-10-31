import { defaultTheme } from './defaultTheme';

export const lightTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#d9d9d9ff', // principal
    backgroundSurface: '#f3f3f3ff', // sessões

    primary:'#2bbf97ff', //30%  → regra dos terços
    secondary:'#706aa4ff', //20%  → regra dos terços
    mainColor: '#ffbb25ff', //10%  → regra dos terços

    text:'#201e27ff',
    textMain:'#000000',
    textSecondary:'#d9d9d9ff',
    textSecondaryMain:'#f3f3f3ff',
  },

};

export type theme = typeof lightTheme;
