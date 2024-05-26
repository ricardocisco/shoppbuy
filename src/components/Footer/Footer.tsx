import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 140px;
  margin-top: 200px;
  background-color: #f5efe6;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  font-size: 13px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FooterText = styled.div`
  display: flex;
  & p {
    margin-right: 10px;
    text-decoration: underline;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`;

export default function Footer() {
  return (
    <FooterBox>
      <FooterWrapper>
        <div>
          <p>Copyright © 2024 ShoppBuy Inc. Todos os direitos reservados.</p>
          <FooterText>
            <p>Politica de Privacidade</p>
            <p>Politica de Vendas</p>
            <p>Avisos Legais</p>
          </FooterText>
        </div>
        <div>
          <p>Redes Sociais</p>
          <FooterSocials>
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </FooterSocials>
        </div>
      </FooterWrapper>
    </FooterBox>
  );
}
