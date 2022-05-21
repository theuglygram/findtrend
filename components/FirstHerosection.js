import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "next/dist/client/image";

const FirstHerosection = () => {
  return (
    <>
      <Wrapper>
        <Navbar />

        <ContentWrapper>
          <HeroContainer>
            <Title>Minimize your tabs.</Title>
            <Title>Find the trends!</Title>
            <Desc>
              Don’t let your computer memories consumes all of those browser
              tabs. Findtrend let you gathers all of your favorite website into
              one place.
            </Desc>

            <ContactWrapper>
              <StartBtn>Get Started 🔥</StartBtn>
              <Image
                width={100}
                height={100}
                src="/images/svgs/img_hero.svg"
                alt="research"
              />
            </ContactWrapper>
          </HeroContainer>

          <ImagesWrapper>
            <ImageOne>
              <Image
                width={400}
                height={100}
                src="/images/svgs/tab1.svg"
                alt="tab"
              />
            </ImageOne>
            <ImageTwo>
              <Image
                width={400}
                height={100}
                src="/images/svgs/tab2.svg"
                alt="tab"
              />
            </ImageTwo>
            <ImageThree>
              <Image
                width={400}
                height={100}
                src="/images/svgs/tab3.svg"
                alt="tab"
              />
            </ImageThree>
            <ImageFour>
              <Image
                width={400}
                height={100}
                src="/images/svgs/tab4.svg"
                alt="tab"
              />
            </ImageFour>
          </ImagesWrapper>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default FirstHerosection;

const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    height: 70vh;
  }
  @media only screen and (max-width: 660px) {
    height: 100vh;
  }
`;
const ContentWrapper = styled.div`
  margin: 100px 0 0;
  padding: 0 20px;
  @media only screen and (max-width: 768px) {
    margin: 30px 0 0;
  }
  @media only screen and (max-width: 375px) {
    margin: 10px 0 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  color: #fff;
  font-size: 72px;
  font-weight: 900;
  line-height: 81px;
  letter-spacing: 0em;
  text-align: center;

  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;
const Desc = styled.p`
  font-family: Effra;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #8b8b8b;
  max-width: 600px;
`;
const StartBtn = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  font-family: Effra;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  width: 180px;
  height: 57px;
  background: #a8ff35;
  border-radius: 40px;
  text-align: center;
  margin: 40px 0;
  color: #000;
  @media only screen and (max-width: 780px) {
    margin: unset;
  }
  @media only screen and (max-width: 660px) {
    margin-top: 10px;
    margin-bottom: 0;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 765px) {
    span {
      display: none !important;
    }
  }
`;

const ImagesWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 660px) {
    flex-direction: column;
    max-height: 350px;
  }
`;
const ImageOne = styled.div`
  position: relative;
  left: 20px;
  bottom: 15px;
  img {
    transform: rotate(-10deg);
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    left: unset;
    bottom: unset;
    img {
      transform: rotate(-10deg);
      width: 250px;
    }
  }
`;
const ImageTwo = styled.div`
  position: relative;
  top: 10px;
  right: 30px;
  img {
    transform: rotate(-4deg);
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    top: unset;
    right: unset;
    img {
      width: 250px;
    }
  }
`;
const ImageThree = styled.div`
  position: relative;
  top: 30px;
  right: 50px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    top: unset;
    right: unset;
    img {
      width: 250px;
    }
  }
`;
const ImageFour = styled.div`
  position: relative;
  bottom: 30px;
  right: 120px;
  img {
    transform: rotate(4deg);
    width: 100%;
  }
  @media only screen and (max-width: 660px) {
    right: unset;
    bottom: unset;
    img {
      width: 250px;
    }
  }
`;
