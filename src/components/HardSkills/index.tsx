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
                    {/* {cada SContainerStack deve ser criado em um loop, esse loop será resultado de um map nos dados.


                    • criar váriavel de estado stack que recebe um array de string. → useState
                    • criar constante data que consome os dados do json
                    • percorrer o data → map
                    • checar se no stack de estado contem o valor da stack do produto → if
                        ∟ se o resultado for false
                            ∟ adicione o valor do stack do produto na variavel de estado.
                     
                    • percorrer o data → map
                    • criar componente SContainerStack para cada item
                        <SContainerStack>
                            <header>
                                stack
                            </header>
                            <SContainerCard>
                                • percorrer data
                                    ∟ se a stack do item === a variavel stack
                                    ∟ crie um componente <CardSkills props{...item} />
                            </SContainerCard>
                        </SContainerStack>

                    } */}

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