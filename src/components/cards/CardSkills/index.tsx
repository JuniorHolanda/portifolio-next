import { GiDiploma } from "react-icons/gi";
import { SContainerAction, ScontainerIcon, SContent, SSymbolGear, SWrapper } from "./cardsskills.styles";
import { FaArrowRight, FaStarOfLife } from "react-icons/fa";
import { iconsMap } from "@/utils/iconsMap";


type CardSkillsProps = {
    id: string;
    skill: string;
    stack: string;
    description: string;
    certification: {
        title?: string;
    }[];
};

export default function CardSkills({ ...props }: CardSkillsProps) {

    const allcertification = props.certification.length;

    const IconSkill = iconsMap[props.skill]

    return (
        <SWrapper>
            <SSymbolGear />
            <ScontainerIcon>
                {
                    IconSkill ? (
                        <IconSkill className="iconSkill" />
                    ) : (
                        <span>?</span>
                    )
                }
            </ScontainerIcon>
            <SContent>
                <h2>{props.skill}</h2>
                <p>{props.description}</p>
            </SContent>
            <SContainerAction>
                <div>
                    <FaStarOfLife />
                    <p>{`${allcertification} ${allcertification > 0 ? 'certificados' : 'certificado'}`}</p>
                </div>
                <button>
                    <FaArrowRight />
                    <GiDiploma className="icon" />
                </button>
            </SContainerAction>
        </SWrapper>
    );
}