'use client'
import { useViewport } from "@/hooks/useViewport";
import HeaderDesktop from "../HeaderDesktop";
import MenuHamburger from "@/components/MenuHamburger";


export default function HeaderController() {

    const viewport = useViewport();

    return (
        <>
            {viewport === 'lg' && <HeaderDesktop />}
            {viewport !== 'lg' && viewport !== null && <MenuHamburger />}
        </>
    )
}