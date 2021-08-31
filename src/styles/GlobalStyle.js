import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: Netflix Sans;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-repeat: no-repeat;
    background-size: auto;
    /* background-color: black; */
    overflow-x: hidden;
  }

  a {
    color: #0071eb;
    text-decoration: none;
  }

  @font-face {
    font-family: "Netflix Sans";
    font-weight: 100;
    src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2)
        format("woff2"),
      url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff)
        format("woff");
  } 
`;

export const LoggedOutPagesStyle = createGlobalStyle`

* {
  font-family: Netflix Sans;
}

html, body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: auto;
  background-color: black;
  overflow-x: hidden;
}

a {
  color: #0071eb;
  text-decoration: none;
}

@font-face {
  font-family: "Netflix Sans";
  font-weight: 100;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2)
      format("woff2"),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff)
      format("woff");
} 
`;
