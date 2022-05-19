import React from "react";
import styled from "styled-components";

const ThirdHeroSection = () => {
  return (
    <>
      <Wrapper>
        <HeroWrapper>
          <TitleWrapper>
            <Dark>
              Findtrend helps you to increase your productivity and reduce your
              computer's memory load,
            </Dark>
            <Light>
              {" "}
              an application that can fulfill your daily browsing needs.
            </Light>
          </TitleWrapper>

          <DarkTitle>Findtrend make +1000 Startup grow</DarkTitle>
          <img src="../images/pngs/brand_bg.png" alt="brands logo" />
        </HeroWrapper>
      </Wrapper>
    </>
  );
};

export default ThirdHeroSection;

const Wrapper = styled.div``;
const HeroWrapper = styled.div`
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 1160px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 666px) {
    padding: 50px 20px;
  }
`;
const TitleWrapper = styled.div``;
const Dark = styled.span`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;
const DarkTitle = styled.div`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  margin: 200px 0 100px;
  @media only screen and (max-width: 666px) {
    font-size: 30px;
    line-height: 41px;
    margin: 70px 0 50px;
  }
`;
const Light = styled.span`
  color: #adadad;
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: left;
  @media only screen and (max-width: 666px) {
    font-size: 36px;
    line-height: 41px;
  }
`;
