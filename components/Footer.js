import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        <Logo>
          {" "}
          <img src="../images/svgs/blacklogo.svg" />
        </Logo>
        <Links>
          <ListItems>Privacy Policy</ListItems>
          <ListItems>Terms and Conditions</ListItems>
          <ListItems>Contact Us</ListItems>
          <ListItems>Careers</ListItems>
        </Links>
      </FooterContent>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div``;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
  max-width: 1260px;
  margin: 30px auto;
  border-radius: 0px;
  padding: 0 20px;

  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const Logo = styled.div``;
const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
const ListItems = styled.li`
  list-style: none;
  margin: 0 20px;
  @media only screen and (max-width: 765px) {
    margin: 20px;
  }
`;
