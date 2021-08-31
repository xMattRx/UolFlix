import './reset.css';
import { Routes } from './Routes/Route'
import { GlobalStyle } from './styles/GlobalStyle'
import { useParams } from "react-router-dom";
function App() {


  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
