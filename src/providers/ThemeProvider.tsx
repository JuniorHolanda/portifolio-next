'use client';
import { ThemeContext } from "@/contexts/ThemeContext";
import { GlobalStyle } from "@/styles/styles";
import { darkTheme } from "@/themes/darkTheme";
import { lightTheme } from "@/themes/lightTheme";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
    children: ReactNode
}

export function ThemeProviderWrapper({ children }: ThemeProps) {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

    function toggleTheme() {
        setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    const themeObject = themeMode === 'light' ? lightTheme : darkTheme;


    return (
        <ThemeProvider theme={themeObject}>
            <GlobalStyle />
            <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}