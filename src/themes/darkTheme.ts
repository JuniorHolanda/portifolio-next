import { defaultTheme } from './defaultTheme';

export const darkTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#201e27', // principal
    backgroundSurface: '#292730', // sessões

    primary: '#706aa4', //30%  → regra dos terços
    secondary: '#2bbf97', //20%  → regra dos terços
    mainColor: '#ffbb25', //10%  → regra dos terços

    text: '#d9d9d9',
    textMain: '#2bbf97',
    textSecondary: '#292730',
    textSecondaryMain: '#201e27',
  },
};
