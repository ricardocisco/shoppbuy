import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import relogio from "../../assets/smart.png";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

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
  @media (max-width: 1023px) {
    justify-content: space-around;
  }
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    height: inherit;
  }
`;

const HeroImg = styled.img`
  width: 350px;
  @media (max-width: 1023px) {
    width: 250px;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  color: #ffffff;
  max-width: 28rem;
  @media (max-width: 1023px) {
    font-size: 16px;
    & h1 {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    padding: 20px;
    width: inherit;
  }
`;

const HeroButtonBox = styled.div`
  margin-top: 5px;
`;

const HeroButton = styled(Link)`
  color: rgb(48, 131, 255);
  text-decoration: underline;
  font-size: 22px;
  font-weight: 600;
  margin: 12px;
  cursor: pointer;
  &:hover {
    font-size: 23px;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 500px;
  background-color: #f5efe6;
  @media (max-width: 1023px) {
    justify-content: space-around;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    height: inherit;
  }
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 1023px) {
    width: inherit;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #4f6f52;
  & h3 {
    font-size: 28px;
    margin-top: 20px;
  }
`;

const GridContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-areas: ${({ areas }) => areas};
  grid-template-columns: 1fr, 1fr, 1fr, 1fr;
  grid-gap: ${({ gap }) => gap || "5px"};
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  grid-area: ${({ area }) => area};
  background-color: #f5efe6;
  padding: 5px;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
  @media (max-width: 767px) {
    grid-area: initial;
  }
`;

const GridImg = styled.img`
  width: 300px;
  @media (max-width: 1023px) {
    width: 200px;
  }
`;

const GridText = styled.p`
  font-size: 22px;
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
            <HeroButton to="/">Comprar</HeroButton>
            <HeroButton to="/">Ver Mais</HeroButton>
          </HeroButtonBox>
        </HeroText>
        <HeroImg src={relogio}></HeroImg>
      </HeroContainer>
      <ProductsContainer>
        <ProductBox>
          <h1>Produtos</h1>
          <HeroImg src={relogio} />
          <HeroButtonBox>
            <p>R$1.000,00</p>
          </HeroButtonBox>
          <HeroButtonBox>
            <HeroButton to="/">Comprar</HeroButton>
            <HeroButton to="/">Ver Mais</HeroButton>
          </HeroButtonBox>
        </ProductBox>
        <ProductBox>
          <h1>Produtos</h1>
          <HeroImg src={relogio} />
          <HeroButtonBox>
            <p>R$1.000,00</p>
          </HeroButtonBox>
          <HeroButtonBox>
            <HeroButton to="/">Comprar</HeroButton>
            <HeroButton to="/">Ver Mais</HeroButton>
          </HeroButtonBox>
        </ProductBox>
      </ProductsContainer>
      <CategoryContainer>
        <h3>Categorias</h3>
        <GridContainer
          areas="
          'c1 c1 c3 c3' 
          'c2 c6 c4 c4' 
          'c2 c6 c5 c5'
          "
          gap="20px"
        >
          <GridItem area="c1">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
          <GridItem area="c2">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
          <GridItem area="c3">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
          <GridItem area="c4">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
          <GridItem area="c5">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
          <GridItem area="c6">
            <GridText>Computadores</GridText>
            <GridImg src={relogio} />
          </GridItem>
        </GridContainer>
      </CategoryContainer>
      <Footer />
    </Container>
  );
}
