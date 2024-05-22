import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearchOutline, IoBagOutline } from "react-icons/io5";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.4);
  position: fixed;
  color: #fff;
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
