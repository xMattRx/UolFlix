import React, { useRef, useState, useEffect, useCallback } from "react";
import Header from "../../../Components/Header";
import Hero from "../../../Components/Hero";
import Footer from "../../../Components/Footer";
import { Link, useParams, useHistory } from "react-router-dom";
import Input from "../../../Components/Input";
import FacebookIcon from "../../../Assets/fb-icon.png";
import FadeIn from "../../../Components/Animations/FadeIn";
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
export function Login() {
  const [show, setShow] = useState(false);
  const [showEye, setShowEye] = useState(false);
  const [disappearBtn, setDisappearBtn] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  let schema;
  let history = useHistory();

  const formRef = useRef(null);

  const ChangeFalse = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      setPasswordShown(false);
      setErrorPassword(false);
    }
  }, []);

  const togglePasswordVisiblity = () => {
    let isMounted = true;
    if (isMounted) {
      setPasswordShown(!passwordShown)
    }
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
        email: Yup.string()
          .email("Informe um email válido.")
          .required("Informe um email válido."),
        password: Yup.string()
          .min(6, "A senha deve ter entre 6 e 60 caracteres.")
          .max(60, "A senha deve ter entre 6 e 60 caracteres.")
          .required("A senha deve ter entre 6 e 60 caracteres."),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      // console.log(data); // <----------- FAZER REQUEST DA API AQUI
      // console.log(JSON.parse(sessionStorage.getItem("login")));

      try {
        let loginApiPostReturned = await api.post("/sessions", data);
        // console.log(loginApiPostReturned);
        api.defaults.headers.common[`Authorization`] = `Bearer ${loginApiPostReturned.data.token}`;
        sessionStorage.setItem("auth_token", loginApiPostReturned.data.token);
        sessionStorage.setItem("email", data.email);
        // alert("Usuário logado com sucesso!");
        notifySuccess("Usuário logado com sucesso!");

        history.push("/browse");
      } catch (e) {
        notifyError(e.response.data.error.message);
        // notifyError("Usuário ou senha incorretos.");
        // console.log(e.response.data.error.message);
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
        <S.Container>
          <S.Title>Login</S.Title>
          <S.Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" placeholder="Email" type="email" />

            <Input onFocus={() => {
              setShowEye(true);
            }}

              name="password"
              placeholder="Senha"
              autoComplete="off"
              type={passwordShown ? "text" : "password"}
            />
            <S.Eye error={errorPassword} showEye={showEye} onClick={togglePasswordVisiblity}>
              {eye}
            </S.Eye>
            <S.Submit type="submit">Entrar</S.Submit>
          </S.Form>

          <S.CheckboxForm>
            <S.CheckboxDiv>
              <S.Checkbox id="remember-box" type="checkbox" />
              <S.Label htmlFor="remember-box">Lembre-se de mim</S.Label>
            </S.CheckboxDiv>
            <S.Help to="/ConfirmEmail">Esqueceu sua senha?</S.Help>
          </S.CheckboxForm>

          <S.Facebook>
            <S.FacebookImg src={FacebookIcon} alt="Facebook"></S.FacebookImg>
            Conectar com Facebook
          </S.Facebook>
          <S.Text>
            Novo por aqui? <S.SignUp to="/Register">Assine agora</S.SignUp>.
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
              <S.SmallDescription>
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
