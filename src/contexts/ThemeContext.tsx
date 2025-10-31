'use client';

import { createContext} from "react";

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData | undefined>(undefined);