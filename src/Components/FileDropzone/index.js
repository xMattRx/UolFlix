import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

toast.configure();

import * as S from "./styles";

export default function ReactDropzoneInput(props) {
  const [files, setFiles] = useState([]);
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDropAccepted: () => {
      setFiles(acceptedFiles);
    },
  });

  let history = useHistory();

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
      })
      .catch(e => {
        notifyError("Erro: usuário não verificado");
        sessionStorage.clear();
        console.log(e);
      });
  }, []);

  const ellipsis = (str) => {
    if (str.length > 18) {
      str = str.slice(0, 15) + '...' + str.split('.')[1];
    }
    return str;
  }

  const handleFileSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    var imageFile = acceptedFiles[0];
    formData.append("file", imageFile);
    api.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((value) => {
      let data = {
        avatar: value.data.file,
      }
      api.patch(`/users/update`, data).then((value) => {
        getUser();
        history.push("/Profile");
        notifySuccess("Avatar atualizado com sucesso!");
      });
    }).catch((err) => {
      notifyError("Erro: não foi possível atualizar o avatar")
      console.log("FileDropzone ApiPost Error: ", err);
    })
  };

  return (
    <form onSubmit={handleFileSubmit}>
      <S.Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        {acceptedFiles.length > 0 ? (
          <S.StyledDivList>
            <ul>
              {acceptedFiles.map(file => (
                <li key={file.name}>
                  {ellipsis(file.name)} - {file.size} bytes 
                </li>
              ))}
            </ul>
            <S.StyledButton type="submit">
              Enviar
            </S.StyledButton>
          </S.StyledDivList>
        ) : (
          <>
            <S.Title>Avatar</S.Title>
            <S.StyledInput {...getInputProps()} accept="image/*" />

            {isDragActive ? (
              <S.StyledParagraph>Arraste o arquivo para cá!</S.StyledParagraph>
            ) : (
              <S.StyledParagraph>
                Arraste uma imagem, ou clique aqui
              </S.StyledParagraph>
            )}
          </>
        )}
      </S.Container>
    </form>
  );
}
