import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Offers from "../Pages/Offers";
import Signin from "../Pages/Signin";
import Profile from "../Pages/Profile";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
