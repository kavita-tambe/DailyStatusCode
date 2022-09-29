import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </UserAuthContextProvider>
  </Box>
);

export default App;
