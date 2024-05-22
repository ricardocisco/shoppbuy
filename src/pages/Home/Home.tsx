import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import relogio from "../../assets/smart.png";

const Container = styled.div`
  display: block;
  height: 100vh;
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 450px;
  padding: 45px 0;
  background-color: #4f6f52;
`;

const HeroImg = styled.img`
  width: 350px;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  color: #ffffff;
  max-width: 28rem;
`;

const HeroButtonBox = styled.div``;

const HeroButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 8px 12px;
  margin: 8px;
  border-radius: 15px;
  cursor: pointer;
`;

const ProductsContainer = styled.div`
  margin: 20px;
  height: 500px;
  background-color: #f5efe6;
  border-radius: 10px;
`;

export default function Home() {
  return (
    <Container>
      <Navbar />
      <HeroContainer>
        <HeroText>
          <h1>Ultra Rápido, Ultra Dinámico</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo
            nunc, maximus sit amet rutrum et, pulvinar vel augue. Etiam semper,
            purus in ullamcorper bibendum, erat urna rhoncus erat, et commodo
            lectus magna ut urna. Mauris porttitor rutrum tempor. Sed
            sollicitudin tristique posuere. Vestibulum eu nulla a ex laoreet
            bibendum id vitae tellus. Fusce rhoncus dui sed nisl ornare posuere.
            Pellentesque ut mollis urna. Nunc faucibus nisi sit amet eros
            dapibus dignissim sed sed quam. Phasellus libero arcu, blandit sit
            amet rutrum at, tempor in massa. Morbi vulputate mi ac scelerisque
            volutpat. Sed varius venenatis pulvinar. Vestibulum ante ipsum
          </p>
          <HeroButtonBox>
            <HeroButton>Comprar</HeroButton>
            <HeroButton>Ver Mais</HeroButton>
          </HeroButtonBox>
        </HeroText>
        <HeroImg src={relogio}></HeroImg>
      </HeroContainer>
      <ProductsContainer></ProductsContainer>
    </Container>
  );
}
