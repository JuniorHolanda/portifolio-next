import { IoClose, IoCloseOutline, IoMenu } from "react-icons/io5";
import { SBtnClose, SBtnIconOpen, SContainerSocial, SContentMenu, SIcon, SWrapper } from "./menuHamburger.styles";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import ButtomThemeMode from "../ButtomThemeMode";
import NavMain from "../NavMain";
import { useEffect, useState } from "react";

export default function MenuHamburger() {

    const [showMenu, setShowMenu] = useState<boolean | undefined>(false);

    useEffect(() => {

    }, [showMenu])

    return (
        <>
            <SWrapper>
                <SBtnIconOpen onClick={() => setShowMenu(!showMenu)}>
                    <IoMenu className="iconOpenMenu" />
                </SBtnIconOpen>
                {
                    showMenu &&
                    <SContentMenu>
                        <SBtnClose onClick={() => setShowMenu(!showMenu)}>
                            <IoCloseOutline className="iconCloseMenu" />
                        </SBtnClose>
                        <NavMain width="100%" align="center" />
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
                }
            </SWrapper>
        </>
    )
}