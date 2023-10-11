import React from "react";
import logo from "../../images/logo.svg";

export default function Home() {
  return (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <div>
        <h1>Página não encontrada.</h1>
      </div>
      <div>
        <p>Oops! Parece que a página que você está buscando não existe.</p>
      </div>
      <button className="button-primary">Voltar para a página inicial</button>
    </div>
  );
}
