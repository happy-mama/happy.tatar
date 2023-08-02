import { Container, Image, Text } from "./styled";

interface input {
  url: string;
  name?: string;
  image?: string;
}

export default function HeaderLink({ url, name, image }: input) {
  if (!image) {
    return (
      <Container to={url}>
        <Text>{name}</Text>
      </Container>
    );
  } else {
    return (
      <Container to={url}>
        <Image src={image}></Image>
      </Container>
    );
  }
}
