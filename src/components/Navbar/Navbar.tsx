import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  height: 50px;
  color: #fff;
  position: fixed;
`;

const NavTitle = styled.h1`
  font-size: 22px;
`;

const NavDisordered = styled.ul`
  display: flex;
  align-items: center;
`;

const DivLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
`;

const Icon = styled.i`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export default function Navbar() {
  return (
    <NavWrapper>
      <NavTitle>Navbar</NavTitle>
      <NavDisordered>
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
            <IoSearchOutline />
          </Icon>
          <Icon>
            <IoBagOutline />
          </Icon>
        </DivLink>
      </NavDisordered>
    </NavWrapper>
  );
}
