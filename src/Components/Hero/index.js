import React from "react";
import { Background } from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <Hero {...restProps}>{children}</Hero>;
}

Hero.Background = function HeroBackground({ children, ...rest }) {
  let cat = window.location.href.split("/")[3];
  return (
    <Background cat={cat} {...rest}>
      {children}
    </Background>
  );
};
