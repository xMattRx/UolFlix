import React, { useRef, useState, useEffect, useCallback } from "react";
import * as S from "./styles";
import GlobalHeader from "../../../Components/GlobalHeader";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import api from "../../../Services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export function ChangePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

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

  const ChangeFalse = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      setPasswordShown(false);
      setConfirmPasswordShown(false);
      setErrorPassword(false);
      setErrorConfirmPassword(false);
    }
  }, []);

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
        password_confirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Senhas devem ser iguais",
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      try {

        let apiPatchReturned = await api.patch("/users/update", data);
        notifySuccess("Senha alterada!");
        history.push("/Profile");
        ChangeFalse();
      } catch (err) {
        notifyError("Erro");
        console.log(err);
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
        if (errorMessages.password_confirmation) {
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
    if (isMounted) {
      ChangeFalse();
    };
  }, []);

  return (
    <>
      <S.BackgroundStyle />
      <GlobalHeader />
      <S.Container>
        <S.Title>Trocar Senha</S.Title>
        <S.Form ref={formRef} onSubmit={handleSubmit}>
          <S.InputDiv>
            <S.StyledInput
              name="password"
              placeholder="Nova Senha"
              type="password"
            />
            <S.StyledInput
              name="password_confirmation"
              placeholder="Confirme sua Nova Senha"
              type="password"
            />
          </S.InputDiv>
          <S.Submit type="submit">Salvar</S.Submit>
        </S.Form>
      </S.Container>
    </>
  );
}
