import { Carousel } from "react-responsive-carousel";
import { Block, BlockText } from "./styled";
import { Middle, Spacer, TextLink } from "widgets/WindowParts/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Section2() {
  return (
    <Block>
      <BlockText>Work experience</BlockText>
      <Spacer $height="20px" />
      <BlockText $size="20px">
        Currently working in{" "}
        <TextLink
          style={{ display: "inline-block" }}
          to="https://aino.world"
          target="_blank"
          children="Aino.world"
        />{" "}
        as frontend dev.
        <Spacer $height="20px" />
        <Middle>
          <Carousel autoPlay infiniteLoop emulateTouch swipeable>
            <div>
              <img alt="aino0" src="/projects/aino0.webp" />
            </div>
            <div>
              <img alt="aino0" src="/projects/aino1.webp" />
            </div>
            <div>
              <img alt="aino0" src="/projects/aino2.webp" />
            </div>
            <div>
              <img alt="aino0" src="/projects/aino3.webp" />
            </div>
          </Carousel>
        </Middle>
      </BlockText>
    </Block>
  );
}
