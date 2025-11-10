import { defaultTheme } from './defaultTheme';

export const darkTheme = {
  ...defaultTheme,
  colors: {
    backgroundBase: '#29272fff',
    backgroundSurface: '#292730', 
    backgroundMedium: '#292730', 

    primary: '#2bbf97', //30%  → regra dos terços
    secondary: '#252429', //20%  → regra dos terços
    mainColor: '#ffbb25', //10%  → regra dos terços

    title: '#706aa4ff',

    text: '#d9d9d9',
    textMain: '#2bbf97',
    textSecondary: '#292730',
    textSecondaryMain: '#201e27',
    
    border:'#2c2c2cff'
  },
};
