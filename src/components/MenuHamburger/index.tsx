import { IoMenu } from "react-icons/io5";
import { SContainerSocial, SContentMenu, SWrapper } from "./menuHamburger.styles";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function MenuHamburger() {



    return (
        <>
            <SWrapper>
                <IoMenu className="iconOpenMenu" />
                <SContentMenu>
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
                </SContentMenu>
            </SWrapper>
        </>
    )
}