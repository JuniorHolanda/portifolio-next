'use client';

import { useThemeContext } from "@/hooks/useThemeContext";
import { Header } from "./headerDesktop.styles";

export default function HeaderDesktop() {
    const { themeMode, toggleTheme } = useThemeContext()

    return (
        <Header>
            <button onClick={toggleTheme}>
                Tema atual: {themeMode === 'light' ? '🌞 Claro' : '🌙 Escuro'}
            </button>
        </Header>
    );
}