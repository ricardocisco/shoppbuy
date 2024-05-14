import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import relogio from "../../assets/smart.jpg";

const HeroContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 450px;
  background-color: #f3f3f3;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroContainer>
        <HeroImg src={relogio} alt="relogio"></HeroImg>
      </HeroContainer>
    </>
  );
}
