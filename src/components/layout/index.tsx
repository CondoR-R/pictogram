import * as React from 'react';
import {Outlet} from "react-router";
import {Header} from "../common/header";

interface Props {
  className?: string;

};

const Layout: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;