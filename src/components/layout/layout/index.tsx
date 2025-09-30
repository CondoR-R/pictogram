import * as React from 'react';
import {Outlet} from "react-router";
import {Header} from "../header";
import style from "./layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;