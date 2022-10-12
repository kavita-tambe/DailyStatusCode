// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import { BrowerRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
