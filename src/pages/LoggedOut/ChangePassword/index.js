import React, { useRef, useState, useEffect, useCallback } from "react";
import Header from "../../../Components/Header";
import Hero from "../../../Components/Hero";
import Footer from "../../../Components/Footer";
import { useHistory } from "react-router-dom";
import Input from "../../../Components/Input";
import * as Yup from "yup";
import * as S from "../../../Components/Input/styles";
import { LoggedOutPagesStyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import api from "../../../Services/api";
import { VerificationLogged } from "../../../functions/VerificationLogged";
const eye = <FontAwesomeIcon icon={faEye} />;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export function ChangePassword() {
  let cat = window.location.href.split("/")[3];
  cat = cat.split("#")[0];

  const [show, setShow] = useState(false);
  const [disappearBtn, setDisappearBtn] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  let schema;
  let history = useHistory();

  const formRef = useRef(null);

  const ChangeFalse = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      setPasswordShown(false);
      setConfirmPasswordShown(false);
      setErrorPassword(false);
      setErrorConfirmPassword(false);
    }
    // console.log(errorPassword, errorConfirmPassword);
  }, []);

  const togglePasswordVisiblity = () => {
    let isMounted = true;
    if (isMounted) setPasswordShown(passwordShown ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    let isMounted = true;
    if (isMounted) setConfirmPasswordShown(confirmPasswordShown ? false : true);
  };

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
        password: Yup.string()
          .required("Informe uma senha")
          .min(6, "A senha deve possuir no minimo 6 digitos")
          .matches(
            "((?=.[!@#$%^&()-=+{};:,<.>]){1})",
            "Deve possuir ao menos um caracter especial",
          )
          .matches(
            "((?=.*[A-Z]){1})",
            "Deve possuir ao menos uma letra maiuscula",
          )
          .matches("((?=.*[0-9]){1})", "Deve possuir ao menos um número")
          .matches(
            "((?=.[!@#$%^&()-=+{};:,<.>]){1})",
            "Deve possuir ao menos um caracter especial",
          ),
        passwordconfirm: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Senhas devem ser iguais",
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      // console.log(data);
      try {
        let sessionStorageToken = JSON.parse(sessionStorage.getItem("token"));
        let newObj = {
          token: sessionStorageToken,
          password: data.password,
          password_confirmation: data.passwordconfirm,
        };
        sessionStorage.clear("token");
        // console.log(newObj);

        let ApiPutReturned = await api.put("/passwords", newObj);
        // console.log(ApiPutReturned)
        notifySuccess("Senha alterada!");
        history.push("/");
        ChangeFalse();
      } catch (e) {
        notifyError("Erro");
        console.log(e);
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        if (errorMessages.password) {
          setErrorPassword(true);
        } else {
          setErrorPassword(false);
        }
        if (errorMessages.passwordconfirm) {
          setErrorConfirmPassword(true);
        } else {
          setErrorConfirmPassword(false);
        }
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) ChangeFalse();
    // console.log("Effect");
  }, []);

  return (
    <>
      <VerificationLogged />
      <Hero.Background>
        <Header />
        <S.Container cat={cat}>
          <S.Title>Confirmar Senha</S.Title>
          <S.Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="password"
              placeholder="Senha"
              type={passwordShown ? "text" : "password"}
            />
            <S.Eye error={errorPassword} onClick={togglePasswordVisiblity}>
              {eye}
            </S.Eye>
            <Input
              name="passwordconfirm"
              placeholder="Confirme sua senha"
              type={confirmPasswordShown ? "text" : "password"}
            />
            <S.Eye
              error={errorConfirmPassword}
              onClick={toggleConfirmPasswordVisiblity}
            >
              {eye}
            </S.Eye>

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
