
import { SContainerLogo, SContainerSocial, SHeader, SNav } from "./headerDesktop.styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ButtomThemeMode from "@/components/ButtomThemeMode";

export default function HeaderDesktop() {

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
            <ButtomThemeMode />
        </SHeader>
    );
}