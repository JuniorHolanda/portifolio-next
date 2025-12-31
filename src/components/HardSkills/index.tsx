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
                <h2>Do design ao  deploy</h2>
                <h1>Hard Skill</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium voluptatulpa soluta, assumenda odio porro it et, accusamus necessitatibusue alias! Magnam ea tempora voluptatum.</p>
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