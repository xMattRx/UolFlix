import React from "react";
import { Redirect } from "react-router-dom";

export function VerificationLogged() {
  var isLogged = null;

  let token = sessionStorage.getItem("auth_token");
  if (token) isLogged = true;
  return (
    <>
      {isLogged && (
        <Redirect
          to={{
            pathname: "/browse",
          }}
        />
      )}
    </>
  );
}
