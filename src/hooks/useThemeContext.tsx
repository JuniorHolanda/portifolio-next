'use client';
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export function useThemeContext() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useThemeContext deve ser usado dentro do ThemeProvider')
    }
    return ctx
}