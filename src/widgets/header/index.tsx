import { HeaderContainer } from "./styled";
import HeaderLink from "../HeaderLink";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLink url="/" image="/svg/logo.svg" />
      <HeaderLink name="instruments" url="/i" />
    </HeaderContainer>
  );
}
