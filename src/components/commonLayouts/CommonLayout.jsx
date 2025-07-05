import React from "react";

import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import FriendsList from "../FriendsList";
import CoverPart from "../CoverPart";

const CommonLayout = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-between">
        <SideBar />
        <CoverPart />
        <FriendsList />
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </>
  );
};

export default CommonLayout;
