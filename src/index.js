import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Page from "./pages/Page";
import Profile from "./pages/Profile";
import List from "./pages/List";
import Search from "./components/Search";

// 현장 미션
import ScreenDownload from "./components/ScreenDownload";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="search" element={<Search />} />

      <Route path="login/:token" element={<Login />} />
      <Route path="page/:id" element={<Page />} />
      <Route path="list/:list" element={<List />} />

      <Route path="test" element={<ScreenDownload />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
