import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    {/* <Navbar /> */}
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes> 
    <Footer />*/}
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
      {/* <Route path="/exercise/:id" element={<ExerciseDetail />} /> */}
    </Routes>
  </Box>
);

export default App;
