'use client';

import Link from "next/link";
import { SAside, ScontainerImg, ScontainerProfile, SContainerSocial, Scontent, Ssection, SWrapper } from "./heroSection.styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useThemeContext } from "@/hooks/useThemeContext";

export default function HeroSection() {

    //usa o valor light ou dark para alterar a imagem renderizada
    const theme = useThemeContext();

    console.log(theme.themeMode)

    return (
        <SWrapper>
            <SAside>
                <ScontainerProfile>
                    <ScontainerImg>
                        <img src="./eu-rgb-profile.jpg" alt="Homem com camiseta preta em um ambiente com alguns itens remetentes a tecnologia desfocados ao fundo" />
                    </ScontainerImg>
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
                </ScontainerProfile>
            </SAside>
            <Ssection>
                <Scontent>
                    <h1>
                        .Sobre{'{'}
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non iusto nisi, velit recusandae ratione voluptates, explicabo cupiditate magni, necessitatibus repudiandae. Totam officiis sunt atque nobis aliquid dolorum pariatur illo?
                    </p>
                    <h2>
                        {'}'}
                    </h2>
                    <img src={`${theme.themeMode}BrutalSymbolBg.png`} alt="um símbolo abstrato brtalista amarelo" />
                </Scontent>
            </Ssection>
        </SWrapper>
    )
}