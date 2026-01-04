'use client';

import Link from "next/link";
import { SAside, SContainerFrontEndBar, ScontainerImg, ScontainerProfile, SContainerSocial, Scontent, SText, SWrapper } from "./heroSection.styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useThemeContext } from "@/hooks/useThemeContext";
import FrontEndBar from "../FrontEndBar";
import NavMain from "../NavMain";
import { useViewport } from "@/hooks/useViewport";
import MenuHamburger from "../MenuHamburger";

export default function HeroSection() {

    const theme = useThemeContext();
    const viewPort = useViewport();



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
                <SContainerFrontEndBar>
                    <FrontEndBar />
                    <FrontEndBar />
                </SContainerFrontEndBar>
            </SAside>

            <Scontent>
                <SText>
                    <h1>
                        .Sobre{'{'}
                    </h1>
                    <div>
                        <p>
                            Olá! Sou Geraldo Pedro, desenvolvedor Front-End desde 2022. Iniciei minha jornada estudando <strong>HTML, CSS e JavaScript</strong> e, desde então, mantenho uma rotina constante de aprendizado e evolução na área.
                        </p>
                        <p>
                            Hoje me especializo em <strong>React, Next.js, TypeScript e Styled-Components</strong>, além de estudar fundamentos de back-end, como <strong>bancos de dados e criação de APIs.</strong>
                        </p>
                        <p>
                            Com <strong>15 anos de experiência como designer</strong>, trago uma visão que complementa minha atuação técnica. Essa bagagem me permite criar interfaces modernas e de grande apelo visual.
                        </p>
                    </div>
                    <h2>
                        {'}'}
                    </h2>
                </SText>
                <img src={`${theme.themeMode}BrutalSymbolBg.png`} alt="um símbolo abstrato brtalista amarelo" />
                {viewPort !== 'lg' && viewPort !== null ? <MenuHamburger /> : <NavMain />}
            </Scontent>
        </SWrapper>
    )
}