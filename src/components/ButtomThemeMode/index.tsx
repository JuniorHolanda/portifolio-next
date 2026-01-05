'use client'
import { FaMoon, FaSun } from "react-icons/fa";
import { SContainerTheme } from "./buttomThemeMode.styles";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function ButtomThemeMode() {

    const { themeMode, toggleTheme } = useThemeContext()

    return (
        <SContainerTheme onClick={toggleTheme} $toggle={themeMode}>
            <label htmlFor="checkTheme"></label>
            <input type="checkbox" id="checkTheme" />
            <FaSun className="containerIconSun" />
            <FaMoon className="containerIconMoon" />
        </SContainerTheme>
    )
}