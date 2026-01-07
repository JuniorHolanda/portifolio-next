import { SWrapper } from "./navmain.styles";
import { SlArrowDown } from "react-icons/sl";

type NavMainProps = {
  width?: string
  align?: 'flex-end' | 'center'
}

export default function NavMain({ width = '30%', align = 'flex-end' }: NavMainProps) {
  return (
    <SWrapper $align={align} $width={width}  >
      <nav>
        <SlArrowDown className="arrowElementVisual" />
        <ul>
          <li>SOBRE</li>
          <li>HARDSKILL</li>
          <li>PROJETOS</li>
          <li>CONTATOS</li>
        </ul>
      </nav>
    </SWrapper>
  );
}
