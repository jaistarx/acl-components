import { FooterProps } from "./footer.types";
import React from "react";
import FooterStyles from "./footer.module.css";

const Footer = (props: FooterProps) => {
  return (
    <>
      <div className={FooterStyles["outer-container"]}>Footer</div>
    </>
  );
};

export default Footer;
