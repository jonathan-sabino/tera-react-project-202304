import React from "react";
import logo from "../../images/logo.svg";
import DrawerMenu from "../molecules/DrawerMenu";
import { Link } from "react-router-dom";

export default function AppHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DrawerMenu open={open} setOpen={setOpen} />
      <div className="app-header">
        <div className="app-header__logo">
          <Link to="/">
            <img src={logo} className="responsive" alt="" />
          </Link>
        </div>
        <div className="app-header__menu">
          <i onClick={() => setOpen(true)} className="fa fa-bars"></i>
        </div>
      </div>
    </>
  );
}
