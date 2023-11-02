import { Block, BlockText } from "./styled";
import { InlineElements } from "src/widgets/WindowParts/styled";
import EmbedLink from "src/widgets/EmbedLink";

export default function Section4() {
  return (
    <>
      <Block $top="20%" $left="10%" $width="100%">
        <BlockText>My links 👀</BlockText>
        <InlineElements>
          <EmbedLink
            url="https://github.com/happy-mama"
            name="GitHub"
            img="/svg/github.svg"
            target="_blank"
          />
          <EmbedLink
            name="telegram"
            img="/svg/telegram.svg"
            url="https://t.me/kontent_net"
            target="_blank"
          />
          <EmbedLink
            name="VK"
            img="/svg/vk.svg"
            url="https://vk.com/kontent_net"
            target="_blank"
          />
        </InlineElements>
      </Block>
    </>
  );
}
