import React from "react";
import logo from "../../images/logo.svg";
import DrawerMenu from "../molecules/DrawerMenu";

export default function AppHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i onClick={() => setOpen(true)} className="fa fa-bars"></i>
        </div>
      </div>
    </>
  );
}
