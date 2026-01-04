import { SWrapper } from "./navmain.styles";
import { SlArrowDown } from "react-icons/sl";

export default function NavMain() {
  return (
    <SWrapper>
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
