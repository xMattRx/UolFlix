import React, { useRef, useState, useEffect, useCallback } from "react";
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
import FadeIn from "../../../Components/Animations/FadeIn";
import api from "../../../Services/api";
import { VerificationLogged } from "../../../functions/VerificationLogged";
const eye = <FontAwesomeIcon icon={faEye} />;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export function Register() {
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
        name: Yup.string().required("O nome deverá ser preenchido"),
        email: Yup.string()
          .email("Informe um email válido.")
          .required("Informe um email"),
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
        // .required("O campo deve ser preenchido"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      // console.log(data);
      let newObj = {
        username: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.passwordconfirm,
      };

      console.log("REGISTER: ", newObj);

      try {
        let ApiPostReturned = await api.post("/users", newObj);
        console.log(ApiPostReturned);

        console.log(ApiPostReturned.data.id);
        notifySuccess("Cadastrado com sucesso!");
        history.push("/Login");
        ChangeFalse();
      } catch (e) {
        notifyError("Erro: Usuário já cadastrado");
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
          <S.Title>Cadastro</S.Title>
          <S.Form ref={formRef} onSubmit={handleSubmit}>
            <S.InputDiv>
              <Input name="name" placeholder="Nome" type="text" />
              <Input name="email" placeholder="Email" type="email" />
              <Input
                name="password"
                placeholder="Senha"
                type={passwordShown ? "text" : "password"}
                passwordInput=""
              />

              <S.Eye
                error={errorPassword}
                onClick={togglePasswordVisiblity}
                cat={cat}
              >
                {eye}
              </S.Eye>
              <Input
                name="passwordconfirm"
                placeholder="Confirmar Senha"
                autoComplete="off"
                type={confirmPasswordShown ? "text" : "password"}
              />
              <S.Eye
                error={errorConfirmPassword}
                onClick={toggleConfirmPasswordVisiblity}
                cat={cat}
              >
                {eye}
              </S.Eye>
            </S.InputDiv>
            <S.CheckboxForm cat={cat}>
              <S.CheckboxDiv>
                <S.Checkbox id="remember-box" type="checkbox" required />
                <S.Label htmlFor="remember-box">
                  Li e concordo com os{" "}
                  <S.DescriptionLink href="#!">
                    Termos de Uso.
                  </S.DescriptionLink>
                </S.Label>
              </S.CheckboxDiv>
            </S.CheckboxForm>
            <S.Submit type="submit">Cadastrar</S.Submit>
          </S.Form>
          <S.Text cat={cat}>
            Já possui uma conta? <S.SignUp to="/Login">Entre agora</S.SignUp>.
          </S.Text>
          <S.SmallText>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.{" "}
            {disappearBtn ? (
              <S.Info
                onClick={() => {
                  setShow(true);
                  setDisappearBtn(false);
                }}
              >
                Saiba Mais.
              </S.Info>
            ) : null}
          </S.SmallText>

          {show ? (
            <FadeIn duration="0.5s" delay="0.1s">
              <S.SmallDescription cat={cat}>
                As informações recolhidas pelo Google reCAPTCHA estão sujeitas à{" "}
                <S.DescriptionLink
                  href="https://policies.google.com/privacy"
                  target="_blank"
                >
                  Política de Privacidade
                </S.DescriptionLink>{" "}
                e{" "}
                <S.DescriptionLink
                  href="https://policies.google.com/terms"
                  target="_blank"
                >
                  Termos de Uso
                </S.DescriptionLink>
                , e são usadas para oferecer, manter e melhorar o serviço
                reCAPTCHA e por questões de segurança (não são usadas para
                exibir anúncios personalizados pelo Google).
              </S.SmallDescription>
            </FadeIn>
          ) : null}
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
