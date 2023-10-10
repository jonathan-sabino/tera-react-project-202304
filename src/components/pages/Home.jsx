// rfc snippet
// class => className
import React from "react";
// importar imagem
import logo from "../../images/logo.svg";

export default function Home() {
  return (
    <div className="home center">
      <div className="home__logo">
        {/* usar imagem */}
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
