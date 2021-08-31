import React, { useState, useCallback } from "react";
import { CarouselStyled, CarouselInner } from "./styles/carousel";
import { LeftRow, RightRow } from "./styles/carousel";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export function Carousel({ children, sections }) {
  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = useCallback(() => {
    let x = scrollX + 1500;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }, []);

  const handleRightArrow = useCallback(() => {
    let total = sections * -1430;

    let x = scrollX - 1430;
    if (x > 0) {
      x = 0;
    }


    if (x > total) {
      setScrollX(x);
    }
  }, []);

  return (
    <>
      <LeftRow onClick={handleLeftArrow}>
        <MdKeyboardArrowLeft style={{ fontSize: 2000 }} />
      </LeftRow>
      <RightRow onClick={handleRightArrow}>
        <MdKeyboardArrowRight style={{ fontSize: 2000 }} />
      </RightRow>
      <CarouselStyled>
        <CarouselInner sections={sections} scrollX={scrollX}>
          {children}
        </CarouselInner>
      </CarouselStyled>
    </>
  );
}
