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
        <Text className="noSelect">{name}</Text>
      </Container>
    );
  } else {
    return (
      <Container to={url}>
        <Image className="noSelect" src={image}></Image>
      </Container>
    );
  }
}
