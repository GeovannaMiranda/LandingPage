import React from "react";
import { Button } from "reactstrap";
import logo from "../img/logo150.png";
import "../landingPage/index.css";
function TelaInicial() {
  return (
    <div className="class-body">
      <div className="class-header">
        <div className="class-logo">
          <img src={logo} alt="logo_Netflix" />
        </div>
        <div className="class-entrar">
          <Button id="style-button-entrar" >
            ENTRAR
          </Button>
        </div>
      </div>
      <div className="class-body-centro">
        <h1>Sua próxima história, agora.</h1>
        <p>ASSISTA ONDE QUISER, CANCELE QUANDO QUISER.</p>

        <Button className="class-button" id="style-button-assista">
          ASSISTA UM MES GRÁTIS
        </Button>
      </div>
    </div>
  );
}

export default TelaInicial;
