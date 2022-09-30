import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
const Navbar = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      backgroundColor="#FFA9A9"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="nav-data" />
      </Link>
      <Stack className="nav-stack" direction="row">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <a href="#exercises" className="nav-link-ex">
          Exercises
        </a>
        <Button type="submit" onClick={handleLogout} variant="contained">
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
