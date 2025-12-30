import { SFrontEndBar } from "./frontEndBar.styles";

export default function FrontEndBar() {
    // usado para a barra que fica scrollando no sidebar
    const listFrontEndBar = ['Front End', 'Front End', 'Front End', 'Front End', 'Front End', 'Front End',];

    return (
        <SFrontEndBar>
            {
                listFrontEndBar.map((item, i) => (
                    <span key={i}>{item}</span>
                ))
            }
        </SFrontEndBar>
    )
}