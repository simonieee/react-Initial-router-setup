import React from "react";
import { Outlet } from "react-router-dom";
const MainLayoutPresenter = () => {
  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default MainLayoutPresenter;
