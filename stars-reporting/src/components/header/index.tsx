import React from "react";
import HeaderStyles from "./header.module.css";
import { HeaderProps } from "./header.types";

const Header = (props: HeaderProps) => {
  return (
    <>
      <div className={HeaderStyles["outer-container"]}>Header</div>
    </>
  );
};

export default Header;
