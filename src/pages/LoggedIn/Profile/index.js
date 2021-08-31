import React, { useCallback, useEffect, useState, useRef } from "react";
import { useField } from "@unform/core";
import { useHistory } from "react-router-dom";

import GlobalHeader from "../../../Components/GlobalHeader";
import Footer from "../../../Components/Footer";

import * as Yup from "yup";
import * as S from "../styles";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import api, { apiCEP } from "../../../Services/api";

toast.configure();

export function Profile() {
  let cat = window.location.href.split("/")[3];
  cat = cat.split("#")[0];
  // console.log("profile cat", cat, cat.length);

  const [username, setUserName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [complement, setComplement] = useState("");
  const [updateHeader, setUpdateHeader] = useState(false);
  const [errorCpf, setErrorCpf] = useState(false);
  const [errorCep, setErrorCep] = useState(false);

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

  const cepJSON = useCallback(cepValue => {
    apiCEP.get("/" + cepValue + "/json/").then(response => {
      console.log(response.data);
      setCep(cepValue);
      setState(response.data.uf);
      setDistrict(response.data.bairro);
      setCity(response.data.localidade);
      setStreet(response.data.logradouro);
      setComplement(response.data.complemento);
    });
  }, []);

  const ChangeFalse = useCallback(() => {
    let isMounted = true;
    if (isMounted) {
      setErrorCpf(false);
      setErrorCep(false);
    }
  }, []);

  const normalizeValue = useCallback(str => {
    return str ? str.replace(/[^0-9]/g, "") : str;
  }, []);

  const getUser = useCallback(() => {
    let apiGetReturned = api.get("/users/info");
    apiGetReturned
      .then(value => {
        let loggedUser = value.data;
        loggedUser.videos.forEach(value => {
          value.youtubeVideoId = value.youtube_video_id;
          value.thumbnailUrl = value.thumbnail_url;
          delete value.youtube_video_id;
          delete value.thumbnail_url;
        });

        sessionStorage.removeItem("user");
        sessionStorage.setItem("user", JSON.stringify(loggedUser));

        setEmail(loggedUser.email);
        setUserName(loggedUser.username);
        // setAvatar(loggedUser.avatar);
        setPhone(loggedUser.phone);
        setCpf(loggedUser.cpf);
        setBirthDate(loggedUser.birthDate);
        setCep(loggedUser.cep);
        setState(loggedUser.state);
        setCity(loggedUser.city);
        setStreet(loggedUser.street);
        setNumber(loggedUser.number);
        setDistrict(loggedUser.district);
        setComplement(loggedUser.complement);
        // setUser(loggedUser);
        // console.log("END OF GET USERS")
      })
      .catch(e => {
        notifyError("Erro: usuário não verificado");
        sessionStorage.clear();
        console.log(e);
      });
  }, []);

  const handleBlur = async e => {
    e.preventDefault();
    let blurValue = normalizeValue(e.target.value);
    if (blurValue.length == 8) cepJSON(blurValue);
  };

  async function handleSubmit(data) {
    // console.log(avatar);
    data.cpf = normalizeValue(cpf);
    data.cep = normalizeValue(cep);
    data.phone = normalizeValue(phone);
    data.username = username;
    // data.avatar = avatar;
    data.birthDate = birthDate ? birthDate.replaceAll("/", "-") : birthDate;
    data.city = city;
    data.state = state;
    data.district = district;
    data.street = street;
    data.number = number;
    data.complement = complement;

    if (!data.birthDate) {
      data.birthDate = null;
    }
    if (!data.cpf) {
      data.cpf = null;
    }
    if (!data.cep) {
      data.cep = null;
    }
    // if (!data.avatar) {
    //   data.avatar = null;
    // }

    try {
      schema = Yup.object().shape({
        cpf: Yup.string()
          .nullable()
          .notRequired()
          .min(11, "O CPF precisa conter 11 dígitos.")
          .max(11, "O CPF precisa conter 11 dígitos."),

        // .typeError('Amount must be a number')

        cep: Yup.string()
          .nullable()
          .notRequired()
          .min(8, "O CEP precisa conter 8 dígitos.")
          .max(8, "O CEP precisa conter 8 dígitos."),

        // .typeError('Amount must be a number')
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      try {
        // const token = sessionStorage.getItem("auth_token");
        // const config = {
        //   headers: { Authorization: "Bearer " + token },
        // };

        console.log(data);
        let apiGetReturned = await api.patch(`/users/update`, data);
        console.log("value: ", apiGetReturned);
        getUser();

        setUpdateHeader(true);
        // console.log(data);
        notifySuccess("Dados cadastrados com sucesso!");
        // { setTimeout(() => document.location.reload(true), 4000) }
      } catch (e) {
        notifyError("Erro");
        console.log(e.response);
      }

      formRef.current.setErrors({});
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });
        if (errorMessages.cpf) {
          setErrorCpf(true);
        } else {
          setErrorCpf(false);
        }
        if (errorMessages.cep) {
          setErrorCep(true);
        } else {
          setErrorCep(false);
        }
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getUser();
      ChangeFalse();
    }
  }, []);

  return (
    <>
      <S.BackgroundStyle />
      <GlobalHeader update={updateHeader} />
      <S.GridContainer>
        <S.ProfileTitle>Editar Perfil</S.ProfileTitle>
        <S.ProfileDescription>INFORMAÇÕES DA CONTA</S.ProfileDescription>
        <S.HorizontalContainer>
        <S.EditPasswordButton
          onClick={() => {
            history.push("/ChangePassword");
          }}
        >
          Alterar a senha
        </S.EditPasswordButton>
        <S.Dropzone name="avatar" placeholder="Avatar" />
        </S.HorizontalContainer>
        <S.Information>Informações Pessoais</S.Information>
        <S.Form ref={formRef} onSubmit={handleSubmit}>
          <S.Row>
            <S.ProfileLabel>
              Nome de usuário
              <br />
              <S.ProfileInput
                name="username"
                placeholder="Nome do usuário"
                onChange={e => {
                  setUserName(e.target.value);
                }}
                value={username == null ? "" : username}
                type="text"
              />
            </S.ProfileLabel>
          </S.Row>
          <S.Row>
            <S.ProfileLabel>
              Email
              <br />
              <S.ProfileInput
                name="email"
                value={email == null ? "" : email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                type="email"
                disabled
              />
            </S.ProfileLabel>
            <S.ProfileLabel>
              Número de telefone
              <br />
              <S.ProfileInput
                name="phone"
                value={phone == null ? "" : phone}
                onChange={e => {
                  let realValue = normalizeValue(e.target.value);
                  setPhone(realValue);
                }}
                placeholder={"Número de telefone"}
                type="phone"
                mask={"(99) 9 9999-9999"}
              />
            </S.ProfileLabel>
          </S.Row>
          <S.Row>
            <S.ProfileLabel>
              CPF
              <br />
              <S.ProfileInput
                name="cpf"
                value={cpf == null ? "" : cpf}
                onChange={e => {
                  let realValue = normalizeValue(e.target.value);
                  setCpf(realValue);
                }}
                placeholder={"CPF"}
                type="text"
                mask={"999.999.999-99"}
              />
            </S.ProfileLabel>
            <S.ProfileLabel>
              Data de nascimento
              <br />
              <S.ProfileInput
                name="birthDate"
                type="date"
                value={birthDate === null ? "" : birthDate}
                onChange={e => {
                  setBirthDate(e.target.value);
                }}
                placeholder={"aaaa/mm/dd"}
              />
            </S.ProfileLabel>
          </S.Row>
          <S.AddressTitle>Endereço</S.AddressTitle>
          <S.Row>
            <S.AddressLabel>
              CEP
              <br />
              <S.AddressInput
                name="cep"
                type="text"
                // placeholder={user.cep ? user.cep : "CEP"}
                placeholder={"CEP"}
                value={cep == null ? "" : cep}
                onChange={e => {
                  let realValue = normalizeValue(e.target.value);
                  setCep(realValue);
                }}
                onBlur={e => {
                  handleBlur(e);
                }}
                mask={"99999-999"}
              />
            </S.AddressLabel>
          </S.Row>
          <S.Row>
            <S.AddressLabel>
              Estado
              <br />
              <S.AddressInput
                name="state"
                type="text"
                placeholder="Estado"
                value={state == null ? "" : state}
                onChange={e => {
                  setState(e.target.value);
                }}
              />
            </S.AddressLabel>
            <S.AddressLabel>
              Cidade
              <br />
              <S.AddressInput
                name="city"
                type="text"
                placeholder="Cidade"
                value={city == null ? "" : city}
                onChange={e => {
                  setCity(e.target.value);
                }}
              />
            </S.AddressLabel>
          </S.Row>
          <S.Row>
            <S.AddressLabel>
              Rua
              <br />
              <S.CompleteAddress
                name="street"
                type="text"
                placeholder="Rua"
                value={street}
                onChange={e => {
                  setStreet(e.target.value);
                }}
              />
            </S.AddressLabel>
            <S.AddressLabel>
              Número
              <br />
              <S.AddressComplement
                name="number"
                type="number"
                value={number == null ? "" : number}
                onChange={e => {
                  setNumber(e.target.value);
                }}
                placeholder="Número"
              />
            </S.AddressLabel>
          </S.Row>
          <S.Row>
            <S.AddressLabel>
              Bairro
              <br />
              <S.AddressInput
                name="district"
                type="text"
                placeholder="Bairro"
                value={district == null ? "" : district}
                onChange={e => {
                  setDistrict(e.target.value);
                }}
              />
            </S.AddressLabel>
            <S.AddressLabel>
              Complemento
              <br />
              <S.AddressInput
                name="complement"
                placeholder="Complemento"
                type="text"
                value={complement == null ? "" : complement}
                onChange={e => {
                  setComplement(e.target.value);
                }}
              />
            </S.AddressLabel>
          </S.Row>
          <S.Row>
            <S.Submit type="submit">Salvar alterações</S.Submit>
            <S.Cancel
              onClick={() => {
                history.push("/browse");
              }}
            >
              Cancelar
            </S.Cancel>
          </S.Row>
        </S.Form>
      </S.GridContainer>
      <S.Divider></S.Divider>
      <Footer.Wrapper cat={cat}>
        <Footer cat={cat}>
          <Footer.Title>Dúvidas? Entre em contato.</Footer.Title>
          <Footer.Break />
          <Footer.Row>
            <Footer.Column>
              <Footer.Link href="#!">Áudio e Legendas</Footer.Link>
              <Footer.Link href="#!">Imprensa</Footer.Link>
              <Footer.Link href="#!">Declaração de Privacidade</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Centro de ajuda</Footer.Link>
              <Footer.Link href="#!">Carreiras</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Cartão pré-pago</Footer.Link>
              <Footer.Link href="#!">Preferências de cookies</Footer.Link>
            </Footer.Column>

            <Footer.Column>
              <Footer.Link href="#!">Relações com investidores</Footer.Link>
              <Footer.Link href="#!">Termos de uso</Footer.Link>
            </Footer.Column>
          </Footer.Row>
          <Footer.Break />

          <S.ServiceCode>Código do serviço</S.ServiceCode>
          <Footer.Text>© UolFlix Brasil</Footer.Text>
        </Footer>
      </Footer.Wrapper>
    </>
  );
}

export function ProfileInputComponent({ name, mask, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

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
        mask={mask}
        errorborder={error}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      <S.ErrorDiv>{error && <S.ErrorSpan>{error}</S.ErrorSpan>}</S.ErrorDiv>
    </>
  );
}
