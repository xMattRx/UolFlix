import React from "react";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Image,
  Inner,
  Item,
  CardContainer,
  Card,
  DivImage,
  CardImage,
  DivText,
  CardTitle,
  CardSubTitle,
} from "./styles/section";

export default function Section({ children, direction = "row", ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Section.Container = function SectionContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Section.Wrapper = function SectionWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Section.Title = function SectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Section.SubTitle = function SectionSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Section.Image = function SectionImage({ children, ...restProps }) {
  return <Image {...restProps} />;
};

Section.CardContainer = function SectionCardContainer({
  children,
  ...restProps
}) {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};

Section.Card = function SectionCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Section.DivImage = function SectionCardImage({ children, ...restProps }) {
  return <DivImage {...restProps}>{children}</DivImage>;
};

Section.CardImage = function SectionCardImage({ children, ...restProps }) {
  return <CardImage {...restProps} />;
};

Section.DivText = function SectionCardText({ children, ...restProps }) {
  return <DivText {...restProps}>{children}</DivText>;
};

Section.CardTitle = function SectionCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};

Section.CardSubTitle = function SectionCardSubTitle({
  children,
  ...restProps
}) {
  return <CardSubTitle {...restProps}>{children}</CardSubTitle>;
};
