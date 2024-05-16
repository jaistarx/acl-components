import Footer from "@/components/footer";
import Header from "@/components/header";
import SideMenu from "@/components/sidemenu";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LayoutStyles from "./layout.module.css";

const Layout = () => {
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
            <Suspense fallback={<>loading...</>}>
              <Outlet />
            </Suspense>
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
