'use client';

import { useTheme } from "styled-components";
import { SContainerCard, SContainerSkills, SContainerStack, SContent, SInfo, SWrapper } from "./hardSkills.styles";
import { useThemeContext } from "@/hooks/useThemeContext";
import CardSkills from "../cards/CardSkills";

export default function HardSkills() {
    const theme = useThemeContext();
    const themeValue = theme.themeMode;

    return (
        <SWrapper>
            <SInfo>
                <p>Do design ao  deploy</p>
                <h1>Hard Skill</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium voluptatem minus culpa soluta, assumenda odio porro facilis sit et, accusamus necessitatibus doloremque, inventore neque alias! Magnam ea tempora voluptatum.</p>
                <img src={`${themeValue}BrutalSymbolSkills.png`} alt="símbolo brutalista" />
            </SInfo>
            <SContent>
                <SContainerSkills>
                    <SContainerStack>
                        <header>
                            Stack Principal
                        </header>
                        <SContainerCard>
                            <CardSkills />
                            <CardSkills />
                            <CardSkills />
                            <CardSkills />
                            <CardSkills />
                            <CardSkills />
                            <CardSkills />
                        </SContainerCard>
                    </SContainerStack>
                </SContainerSkills>
            </SContent>
        </SWrapper>
    );

}