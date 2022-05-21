import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleHamburger = () => {
    setMenu(!menu);
  };
  return (
    <>
      <Wrapper>
        <NavWrapper>
          <LogoHolder>
            <Image
              src="/images/svgs/logo.svg"
              height={150}
              width={150}
              alt="logo"
            />
          </LogoHolder>

          <NavLinkWrapper toggle={menu}>
            <LinkItems>About</LinkItems>
            <LinkItems>How it Work</LinkItems>
            <LinkItems>Pricing</LinkItems>
            <LinkItems>Solution</LinkItems>
            <LinkItems>Features</LinkItems>
          </NavLinkWrapper>

          <RegHolder>
            <Login>Login</Login>
            <Register>Register</Register>
          </RegHolder>

          <HamMenu onClick={toggleHamburger}>
            <Ham1 toggle={menu}></Ham1>
            <Ham2 toggle={menu}></Ham2>
          </HamMenu>
        </NavWrapper>
      </Wrapper>
    </>
  );
}

export default Navbar;

const Wrapper = styled.div``;
const NavWrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
`;
const LogoHolder = styled.div`
  z-index: 999;
  Image {
    width: 200px;
    height: 200px;
  }
`;
const Logo = styled.img``;
const NavLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 666px;
  transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  @media only screen and (max-width: 765px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    background: #172208;
    width: 100%;
    height: 100vh;
    transform: ${(props) =>
      props.toggle ? "translateY(0px)" : "translateY(-1500px)"};
    display: ${(props) => (props.toggle ? "flex" : "none")};
  }
`;
const LinkItems = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;
const RegHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 213px;
  height: 42px;
  justify-content: space-between;
  @media only screen and (max-width: 765px) {
    display: none;
  }
`;

const HamMenu = styled.div`
  display: none;
  z-index: 999;
  justify-content: space-between;
  @media only screen and (max-width: 765px) {
    display: block;
  }
`;
const Ham1 = styled.div`
  width: 25px;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  z-index: 999;
  transform: ${(props) =>
    props.toggle ? "rotate(40deg) translate(6px,4px) " : "rotate(0)"};
`;
const Ham2 = styled.div`
  width: 25px;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  z-index: 999;
  transform: ${(props) =>
    props.toggle ? "rotate(-40deg) translate(2px,2px) " : "rotate(0deg)"};
`;

const Login = styled.div`
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;
const Register = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  width: 129px;
  height: 42px;
  background: #ffffff;
  border-radius: 40px;
  cursor: pointer;
  font-size: 18px;
`;
