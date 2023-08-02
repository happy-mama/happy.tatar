import {
  HomeWindow,
  InlineElements,
  ListBox,
  MainText,
  Spacer,
  Text,
} from "../../assets/WindowParts/styled";
import EmbedLink from "../../components/EmbedLink";
import List from "../../components/List";

export default function Home() {
  return (
    <HomeWindow>
      <MainText>Hello, i am Junior Fullstack dev 🤙</MainText>
      <Spacer $height="10px" />
      <Text>
        My name is Rodion. I am 19 years old, live in Vladivostok (Russia, GMT
        +10). My main language is JS/TS.
      </Text>
      <Spacer $height="30px" />
      <MainText>My skills</MainText>
      <Spacer $height="10px" />
      <Text $width="50%">
        I did not study programming in educational institutions. All my
        knowledge was acquired by my efforts, and I believe that I have achieved
        something. Here is a list of modules that I am familiar with.
      </Text>
      <Spacer $height="10px" />
      <ListBox>
        <List
          name="frontend"
          data={[
            "React",
            "Vue.JS",
            "Ant design",
            "MapTiler",
            "MapBox",
            "Styled components",
          ]}
        />
        <List name="backend" data={["Express", "Axios", "WebSocket"]} />
        <List name="DB" data={["MongoDB", "PostgreSQL", "MySQL"]} />
        <List name="bots" data={["Discord.JS", "Telegraf.JS"]} />
      </ListBox>
      <Spacer $height="30px" />
      <MainText>Work experience</MainText>
      <Spacer $height="10px" />
      <Text>
        Working in startup "aino.world" as frontend dev.
        <br />
        <br />
        Half a year of work in cyberclub "sektor" as dev (developed telegram
        bots).
      </Text>
      <Spacer $height="30px" />
      <MainText>Links</MainText>
      <Spacer $height="10px" />
      <InlineElements>
        <EmbedLink
          url="https://github.com/happy-mama"
          name="GitHub"
          img="/svg/github.svg"
          target="_blank"
        />
        <Spacer $width="5px" />
        <EmbedLink
          name="telegram"
          img="/svg/telegram.svg"
          url="https://t.me/kontent_net"
          target="_blank"
        />
        <Spacer $width="5px" />
        <EmbedLink
          name="VK"
          img="/svg/vk.svg"
          url="https://vk.com/kontent_net"
          target="_blank"
        />
      </InlineElements>
      <Spacer $height="5px" />
      <List data={["Discord: nan_aaa", "eMail: any@happy.tatar"]} />
      <Spacer $height="20px" />
    </HomeWindow>
  );
}