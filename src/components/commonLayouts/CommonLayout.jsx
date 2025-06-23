import React from "react";

import Header from "../header/Header";
import { Outlet } from "react-router-dom";

const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default CommonLayout;
