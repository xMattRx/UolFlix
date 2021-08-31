import React, { useState, useEffect, useRef, useCallback } from "react";
import { useField } from "@unform/core";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function Input({ name, ...rest }, passwordInput) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [passwordShown, setPasswordShown] = useState(false);

  const eye = <FontAwesomeIcon icon={faEye} />;

  const togglePasswordVisiblity = useCallback(() => {
    setPasswordShown(passwordShown ? false : true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <S.InputField
        errorBorder={error}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {passwordInput === "true" ? (
        <S.Eye onClick={togglePasswordVisiblity}>{eye}</S.Eye>
      ) : (
        <></>
      )}

      <S.ErrorDiv>{error && <S.ErrorSpan>{error}</S.ErrorSpan>}</S.ErrorDiv>
    </>
  );
}
