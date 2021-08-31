import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component, path }) {
  var isLogged = null;

  let token = sessionStorage.getItem("auth_token");
  if (token) isLogged = true;

  return (
    <>
      {isLogged ? (
        <Route component={component} path={path} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
    </>
  );
}
