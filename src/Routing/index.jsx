import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import Profile from "./../Pages/Profile";
import Offers from "../Pages/Offers";
import Layout from "./../Layout/index";
const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Home" element={<Layout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
