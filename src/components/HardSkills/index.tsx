'use client';

import { SContainerCard, SContainerSkills, SContainerStack, SContent, SInfo, SWrapper } from "./hardSkills.styles";
import { useThemeContext } from "@/hooks/useThemeContext";
import CardSkills from "../cards/CardSkills";
import dataSkill from '@/data/skills.json'

export default function HardSkills() {
    const theme = useThemeContext();
    const themeValue = theme.themeMode;
    const stacks = Array.from(new Set(dataSkill.map((item) => item.stack)));


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
                    {
                        stacks.map(stack => (
                            <SContainerStack key={stack}>
                                <header>
                                    {stack}
                                </header>
                                <SContainerCard>
                                    {
                                        dataSkill.filter(item => item.stack === stack)
                                        .map(item => (
                                            <CardSkills key={item.id} {...item} />
                                        ))
                                    }
                                </SContainerCard>
                            </SContainerStack>
                        ))
                    }
                </SContainerSkills>
            </SContent>
        </SWrapper>
    );

}