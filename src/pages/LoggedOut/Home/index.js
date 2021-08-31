import React from "react";
import Header from "../../../Components/Header";
import Hero from "../../../Components/Hero";
import Feature from "../../../Components/Feature";
import { Faq } from "../../../Components/Faq";
import Section from "../../../Components/Section";
import Footer from "../../../Components/Footer";
import { sectionData } from "../../../Data/SectionData";
import boximg from "../../../Assets/boxshot.png";
import { LoggedOutPagesStyle } from "../../../styles/GlobalStyle";
import { VerificationLogged } from "../../../functions/VerificationLogged"

export function Home() {

  return (
    <>
      <VerificationLogged />
      <Hero.Background>
        <Header />
        <Feature>
          <Feature.Title>
            Filmes, séries e muito mais. Sem limites.
          </Feature.Title>
          <Feature.SubTitle>
            Assista onde quiser. Cancele quando quiser.
          </Feature.SubTitle>
        </Feature>
      </Hero.Background>

      <Section.Container>
        {sectionData.map(item => (
          <Section key={item.id} direction={item.direction}>
            <Section.Wrapper>
              <Section.Title>{item.title}</Section.Title>
              <Section.SubTitle>{item.subTitle}</Section.SubTitle>
            </Section.Wrapper>
            <Section.Wrapper>
              <Section.CardContainer>
                <Section.Image src={item.image} alt={item.alt} />

                {item.id === 2 && (
                  <Section.Card>
                    <Section.DivImage>
                      <Section.CardImage src={boximg} />
                    </Section.DivImage>
                    <Section.DivText>
                      <Section.CardTitle>Stranger Things</Section.CardTitle>
                      <Section.CardSubTitle>
                        Download em andamento...
                      </Section.CardSubTitle>
                    </Section.DivText>
                  </Section.Card>
                )}
              </Section.CardContainer>
            </Section.Wrapper>
          </Section>
        ))}
      </Section.Container>

      <Faq />
      <Footer.Wrapper>
        <Footer>
          <Footer.Title>Dúvidas? Ligue 0800-761-4631</Footer.Title>
          <Footer.Break />
          <Footer.Row>
            <Footer.Column>
              <Footer.Link href="!#">Perguntas frequentes</Footer.Link>
              <Footer.Link href="!#">Relações com investidores</Footer.Link>
              <Footer.Link href="!#">Formas de assistir</Footer.Link>
              <Footer.Link href="!#">Informações corporativas</Footer.Link>
              <Footer.Link href="!#">Só na Netflix</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="!#">Centro de ajuda</Footer.Link>
              <Footer.Link href="!#">Carreiras</Footer.Link>
              <Footer.Link href="!#">Termos de uso</Footer.Link>
              <Footer.Link href="!#">Entre em contato</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="!#">Conta</Footer.Link>
              <Footer.Link href="!#">Resgatar cartão pré-pago</Footer.Link>
              <Footer.Link href="!#">Privacidade</Footer.Link>
              <Footer.Link href="!#">Teste de velocidade</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="!#">Imprensa</Footer.Link>
              <Footer.Link href="!#">Comprar cartão pré-pago</Footer.Link>
              <Footer.Link href="!#">Preferências de cookies</Footer.Link>
              <Footer.Link href="!#">Avisos legais</Footer.Link>
            </Footer.Column>
          </Footer.Row>
          <Footer.Break />
          <Footer.Text>© UolFlix Brasil</Footer.Text>
        </Footer>
      </Footer.Wrapper>
      <LoggedOutPagesStyle />
    </>
  );
}
