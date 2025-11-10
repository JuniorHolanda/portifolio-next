import HeroSection from "@/components/HeroSection";
import { SMain } from "./page.styles";
import HardSkills from "@/components/HardSkills";

export default function Home() {

  return (
    <SMain>
      <HeroSection />
      <HardSkills />
    </SMain>
  );
}
