import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.4);
  position: fixed;
  color: #fff;
  z-index: 9999;
  @media (max-width: 768px) {
  }
`;

const NavTitle = styled.h1`
  font-size: 22px;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: ${(props) => (props.active ? "block" : "none")};
    padding: 50px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const DivLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 5px;
  font-size: 22px;
`;

const IconMenu = styled.i`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    z-index: 9999;
  }
`;

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <NavWrapper>
      <IconMenu onClick={() => setActive(!active)}>
        {!active ? <FaBars /> : <AiOutlineClose />}
      </IconMenu>
      <NavUl active={active}>
        <DivLink>
          <Link to="">Home</Link>
        </DivLink>
        <DivLink>
          <Link to="">Produtos</Link>
        </DivLink>
        <DivLink>
          <Link to="">Contato</Link>
        </DivLink>
        <DivLink>
          <Link to="">Sobre</Link>
        </DivLink>
        <DivLink>
          <Icon>
            <IoBagOutline />
          </Icon>
        </DivLink>
      </NavUl>
    </NavWrapper>
  );
}
