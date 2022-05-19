import React from "react";
import styled from "styled-components";

function FourthHero() {
  return (
    <Wrapper>
      <HeroWrapper>
        <TopHeader>
          <Title>All platform connect to Findtrend</Title>
          <Logos></Logos>
        </TopHeader>
        <Tweets>
          <img src="../images/pngs/tweet_1.png" alt="tweet" />
          <img src="../images/pngs/tweet_2.png" alt="tweet" />
          <img src="../images/pngs/tweet_3.png" alt="tweet" />
        </Tweets>

        <TrendBtn>View More Trend</TrendBtn>
      </HeroWrapper>
    </Wrapper>
  );
}

export default FourthHero;

const Wrapper = styled.div`
  background: #fafafa;
  margin: 100px 0;
  @media only screen and (max-width: 666px) {
    margin: 40px 0;
  }
`;
const HeroWrapper = styled.div`
  margin: 0 auto;
  padding: 100px 20px;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 666px) {
    padding: 50px 20px;
  }
`;
const TopHeader = styled.h4`
  font-size: 64px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0em;
  text-align: center;
  @media only screen and (max-width: 666px) {
    font-size: 30px;
    line-height: 41px;
  }
`;
const Title = styled.div``;
const Logos = styled.div``;
const TrendBtn = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  width: 180px;
  height: 57px;
  background: #000;
  border-radius: 40px;
  text-align: center;
  margin: 40px 0;
  color: #fff;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;
const Tweets = styled.div`
  img {
    width: 100%;
    margin: 40px 0;
  }
`;
