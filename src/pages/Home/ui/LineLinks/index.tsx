import { Container, Line, LineBody, LineContent } from "./styled";

export default function LineLinks() {
  return (
    <Container>
      <LineBody>
        <LineContent className="noSelect">Discord: nan_aaa</LineContent>
        <Line />
      </LineBody>
      <LineBody>
        <LineContent className="noSelect">eMail: any@happy.tatar</LineContent>
        <Line />
      </LineBody>
    </Container>
  );
}
