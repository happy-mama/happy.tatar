import { BigText, Block, BlockImg } from "./styled";

export default function Section3() {
  return (
    <>
      <Block $top="20%" $left="10%" $width="100%">
        <BigText>My stack 💅</BigText>
      </Block>
      <Block $top="25%" $left="5%" $width="95%">
        <BlockImg alt="JS" src="/svg/stack/JS.svg" />
        <BlockImg alt="TS" src="/svg/stack/TS.svg" />
        <BlockImg alt="Node.JS" src="/svg/stack/Node.js.svg" />
        <BlockImg alt="React" src="/svg/stack/React.svg" />
        <BlockImg alt="Next.js" src="/svg/stack/Next.js.svg" />
        <BlockImg alt="Vue" src="/svg/stack/Vue.svg" />
        <BlockImg alt="AntDesign" src="/svg/stack/Ant-design.svg" />
        <BlockImg
          alt="StyledComponents"
          src="/svg/stack/Styled-components.svg"
        />
        <BlockImg alt="MapTiler" src="/svg/stack/MapTiler.svg" />
        <BlockImg alt="Mapbox" src="/svg/stack/Mapbox.svg" />
        <BlockImg alt="Express" src="/svg/stack/Express.svg" />
        <BlockImg alt="MongoDB" src="/svg/stack/MongoDB.svg" />
        <BlockImg alt="Supabase" src="/svg/stack/Supabase.svg" />
        {/* <BlockImg alt="Discord.js" src="/svg/stack/Discord.js.svg" /> */}
        {/* <BlockImg alt="Telegraf.js" src="/svg/stack/Telegraf.js.svg" /> */}
        {/* <BlockImg alt="Vite.js" src="/svg/stack/Vite.js.svg" /> */}
        {/* <BlockImg alt="Babel" src="/svg/stack/Babel.svg" /> */}
        {/* <BlockImg alt="Webpack" src="/svg/stack/Webpack.svg" /> */}
      </Block>
    </>
  );
}
