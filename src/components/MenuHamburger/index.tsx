import { IoMenu } from "react-icons/io5";
import { SContainerSocial, SContentMenu, SIcon, SWrapper } from "./menuHamburger.styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ButtomThemeMode from "../ButtomThemeMode";

export default function MenuHamburger() {



    return (
        <>
            <SWrapper>
                <IoMenu className="iconOpenMenu" />
                <SContentMenu>
                    <SIcon>
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
                    </SIcon>
                </SContentMenu>
            </SWrapper>
        </>
    )
}