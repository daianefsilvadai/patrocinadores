import { useState, useEffect } from "react";
import amazon from "./assets/amazon.png";
import sirioLibanes from "./assets/sirioLibanes.png";
import vainaweb from "./assets/vainaweb.png";
import styled from "styled-components";
import createGlobalStyle from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

const Informacao = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const H2 = styled.h2`
  color: #111789;
  display: flex;
  width: 50%;
  text-align: center;
`;

const Patrocinadores = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65vh;
`;

const Img = styled.img`
  width: 30%;
`;

const ImgPatrocinadores = styled.img`
  width: 20%;
`;
function App() {
  const [marca, setMarca] = useState(vainaweb);

  useEffect(() => {
    if (marca === vainaweb) {
      document.querySelector("div").style.background = "#F8BF15";
    } else if (marca === amazon) {
      document.querySelector("div").style.background = "#C7511F";
    } else if (marca === sirioLibanes) {
      document.querySelector("div").style.background = "#eeedf3";
    }
  });
  return (
    <section>
      <GlobalStyle />
      <Informacao>
        <Img src={marca} alt="" />
        <H2>
          PATROCINADORA OFICIAL DO CICLO `TALENTOS DIGITAIS DA ESCOLA VAI NA
          WEB`
        </H2>
      </Informacao>

      <Patrocinadores>
        <ImgPatrocinadores
          onClick={() => {
            setMarca(amazon);
          }}
          src={amazon}
          alt=""
        />
        <img
          onClick={() => {
            setMarca(vainaweb);
          }}
          src={vainaweb}
          alt=""
        />
        <img
          onClick={() => {
            setMarca(sirioLibanes);
          }}
          src={sirioLibanes}
          alt=""
        />
      </Patrocinadores>
    </section>
  );
}

export default App;
