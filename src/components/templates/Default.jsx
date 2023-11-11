import React from "react";
import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";
import DrawerMenu from "../molecules/DrawerMenu";

export default function Default(props) {
  return (
    <div className="wrapper">
      <AppHeader />
      {/* chama o jsx que está entre a abertura e fechamento do componente */}
      {props.children}
      <AppFooter />
    </div>
  );
}
