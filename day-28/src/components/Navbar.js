import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    backgroundColor="#FFA9A9"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      marginTop="10px"
      marginLeft="200px"
    >
      <Link
        to="/home"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          marginLeft: "400px",
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </a>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
        }}
      >
        Logout
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
