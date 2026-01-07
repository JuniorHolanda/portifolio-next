'use client'
import { useViewport } from "@/hooks/useViewport";
import HeaderDesktop from "../HeaderDesktop";
import MenuHamburger from "@/components/MenuHamburger";


export default function HeaderController() {

    const viewport = useViewport();

    return (
        <>
            {viewport === 'lg' || viewport === null ? <HeaderDesktop /> : <MenuHamburger />}
        </>
    )
}