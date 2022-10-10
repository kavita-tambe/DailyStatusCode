import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./gym.css";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    className="hero-ban"
    sx={{ mt: { lg: "205px", xs: "70px" }, ml: { sm: "50px" } }}
  >
    <Typography className="hero-bantypo" data-testid="form">
      Fitness Club
    </Typography>
    <Typography
      className="hero-smile"
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography className="hero-check">
      Check out the most effective exercises
      <br /> personalized to you
    </Typography>
    <Stack>
      <a className="hero-exp" href="#exercises">
        Explore Exercises
      </a>
    </Stack>
    <Typography
      className="hero-bann"
      sx={{
        display: { lg: "block", xs: "none" },
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
