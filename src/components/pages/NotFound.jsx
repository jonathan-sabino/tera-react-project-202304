import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Home() {
  const navigate = useNavigate();
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
      <button onClick={() => navigate("/")} className="button-primary">
        Voltar para a página inicial
      </button>
    </div>
  );
}
