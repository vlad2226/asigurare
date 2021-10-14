import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>0776 1533 165</HeroH1>
          <HeroH2>Asigurare rapidă UK</HeroH2>
          {/* <HeroBtnLink to='https://form.jotformeu.com/61345148994364'>
            Formular Asigurare
          </HeroBtnLink>
          <HeroBtnLink to='https://form.jotformeu.com/73354099456365'>
            Заполните анкету
          </HeroBtnLink>
          <HeroBtnLink to='https://form.jotformeu.com/92712547528362'>
            Попълнете формуляра
          </HeroBtnLink> */}
          <HeroBtnWrapper>
            <Button
              to="signup onMouseEnter={onHover} onMouseLeave={onHover}"
              primary="true"
              dark="true"
            >
              Completează formularul {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
            <Button
              to="signup onMouseEnter={onHover} onMouseLeave={onHover}"
              primary="true"
              dark="true"
            >
              Заполните анкету {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
            <Button
              to="signup onMouseEnter={onHover} onMouseLeave={onHover}"
              primary="true"
              dark="true"
            >
              Попълнете формуляра {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
