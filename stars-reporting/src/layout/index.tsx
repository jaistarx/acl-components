import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidemenu";
import React from "react";
import LayoutStyles from "./layout.module.css";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={LayoutStyles["outer-container"]}>
        <div>
          <SideMenu />
        </div>
        <div className={LayoutStyles["header-body-footer-container"]}>
          <div className={LayoutStyles["header-container"]}>
            <Header />
          </div>
          <div className={LayoutStyles["body-container"]}>
            <>{children}</>
          </div>
          <div className={LayoutStyles["footer-container"]}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
