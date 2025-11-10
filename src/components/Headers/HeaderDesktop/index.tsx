'use client';

import { useThemeContext } from "@/hooks/useThemeContext";
import { SContainerLogo, SContainerSocial, SContainerTheme, SHeader, SNav } from "./headerDesktop.styles";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function HeaderDesktop() {
    const { themeMode, toggleTheme } = useThemeContext()

    return (
        <SHeader>
            <SContainerLogo>
                Pedro de Holanda
            </SContainerLogo>
            <SNav>
                <ul>
                    <li>Início</li>
                    <li>Habilidades</li>
                    <li>Projetos</li>
                    <li>Contatos</li>
                </ul>
            </SNav>
            <SContainerSocial>
                <Link href={'#'} className="containerIcon">
                    <FaGithub />
                </Link>
                <Link href={'#'} className="containerIcon">
                    <FaLinkedin />
                </Link>
                <Link href={'#'} className="containerIcon">
                    <FaWhatsapp />
                </Link>
            </SContainerSocial>
            <SContainerTheme $toggle={themeMode}>
                <label htmlFor="checkTheme"></label>
                <input type="checkbox" id="checkTheme" onClick={toggleTheme} />
                <FaSun className="containerIconSun" />
                <FaMoon className="containerIconMoon" />
            </SContainerTheme>
        </SHeader>
    );
}