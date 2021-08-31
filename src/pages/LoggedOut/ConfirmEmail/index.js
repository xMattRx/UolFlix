import React, { useRef, useState, useCallback } from "react";
import Header from "../../../Components/Header";
import Hero from "../../../Components/Hero";
import Footer from "../../../Components/Footer";
import { Link, useHistory } from "react-router-dom";
import Input from "../../../Components/Input";
import * as Yup from "yup";
import * as S from "../../../Components/Input/styles";
import { LoggedOutPagesStyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import api from "../../../Services/api";
import { VerificationLogged } from "../../../functions/VerificationLogged"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export function ConfirmEmail() {
  let cat = window.location.href.split("/")[3];
  cat = cat.split("#")[0];

  let schema;
  let history = useHistory();

  const formRef = useRef(null);

  const notifySuccess = message => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = message => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  async function handleSubmit(data) {
    try {
      schema = Yup.object().shape({
        email: Yup.string()
          .email("Informe um email válido.")
          .required("Informe um email"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      // console.log(data);
      try {
        let ApiPostReturned = await api.post("/passwords", data);
        console.log("TOKEN: ", ApiPostReturned.data.token);

        history.push("/ConfirmToken");
        // ChangeFalse();
      } catch (e) {
        notifyError(e.response.data.errors[0].message);
        // console.log(e.response.data.errors[0].message);
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <>
      <VerificationLogged />
      <Hero.Background>
        <Header />
        <S.Container cat={cat}>
          <S.Title>Confirmar Email</S.Title>
          <S.Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="Email" type="email" />
            <S.Submit type="submit">Confirmar</S.Submit>
          </S.Form>
        </S.Container>
        <Footer.Wrapper>
          <Footer>
            <Footer.Title>Dúvidas? Ligue 0800-761-4631</Footer.Title>
            <Footer.Break />
            <Footer.Row>
              <Footer.Column>
                <Footer.Link href="!#">Perguntas frequentes</Footer.Link>
                <Footer.Link href="!#">Preferências de cookies</Footer.Link>
              </Footer.Column>

              <Footer.Column>
                <Footer.Link href="!#">Centro de ajuda</Footer.Link>
                <Footer.Link href="!#">Informações corporativas</Footer.Link>
              </Footer.Column>

              <Footer.Column>
                <Footer.Link href="!#">Termos de uso</Footer.Link>
              </Footer.Column>

              <Footer.Column>
                <Footer.Link href="!#">Privacidade</Footer.Link>
              </Footer.Column>
            </Footer.Row>
          </Footer>
        </Footer.Wrapper>
      </Hero.Background>
      <LoggedOutPagesStyle />
    </>
  );
}
