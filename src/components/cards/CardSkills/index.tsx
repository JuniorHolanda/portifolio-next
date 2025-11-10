import { GiDiploma } from "react-icons/gi";
import { SContainerAction, ScontainerIcon, SContent, SIconTypeScript, SSymbolGear, SWrapper } from "./cardsskills.styles";
import { FaArrowRight, FaStarOfLife } from "react-icons/fa";

export default function CardSkills() {
    return (
        <SWrapper>
            <SSymbolGear />
            <ScontainerIcon>
                <SIconTypeScript />
            </ScontainerIcon>
            <SContent>
                <h2>TypeScript</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </SContent>
            <SContainerAction>
                <div>
                    <FaStarOfLife />
                    <p>Certificações</p>
                </div>
                <button>
                    <FaArrowRight />
                    <GiDiploma className="icon" />
                </button>
            </SContainerAction>
        </SWrapper>
    );
}