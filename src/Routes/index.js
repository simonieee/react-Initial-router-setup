import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages";
import { MainLayout } from "../Layout";

const index = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};

export default index;
