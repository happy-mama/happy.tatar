import { Spacer } from "../../widgets/WindowParts/styled";
import { Body, Section } from "./styled";
import LineLinks from "./ui/LineLinks";
import Section1 from "./ui/sections/Section1";
import Section2 from "./ui/sections/Section2";
import Section3 from "./ui/sections/Section3";
import Section4 from "./ui/sections/Section4";

export default function Home() {
  return (
    <>
      <Body>
        <Spacer $height="25px" />
        <Section>
          <Section1 />
        </Section>
        {/* <Section>
          <Section2 />
        </Section> */}
        <Section>
          <Section3 />
        </Section>
        <Section>
          <Section4 />
        </Section>
        <Spacer $height="25px" />
      </Body>
      <LineLinks />
    </>
  );
}
