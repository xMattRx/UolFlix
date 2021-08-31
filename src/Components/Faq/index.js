import React, { useState } from "react";
import { Container, Inner, Title } from "./styles/faq";
import { Accordion } from "../Accordion";
import { FaqData } from "../../Data/FaqData";

export function Faq() {
  const [active, setActive] = useState("");

  return (
    <Container>
      <Inner>
        <Title>Perguntas frequentes</Title>
        {FaqData.map((element, index) => {
          return (
            <Accordion
              key={index}
              title={element.question}
              content={element.answer}
              active={active}
              setActive={setActive}
            />
          );
        })}
      </Inner>
    </Container>
  );
}
