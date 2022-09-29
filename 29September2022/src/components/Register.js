import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import "./gym.css";
const theme = createTheme();

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regexEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    if (!email || regexEmail.test(email) === false) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }
    setError("");
    const regexPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

    if (!password || regexPassword.test(password) === false) {
      setPasswordError("Please Enter the valid password.");
    } else {
      setPasswordError("");
    }
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleBlurEmail = (e) => {
    if (e.target.value) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Email is required");
    }
  };
  const handleBlurPassword = (e) => {
    if (e.target.value) {
      setPasswordError("");
      return true;
    } else {
      setPasswordError("Password is required");
    }
  };

  const handleFocusEmail = () => {
    setEmailError("");
  };
  const handleFocusPassword = () => {
    setPasswordError("");
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="login-box">
          <Avatar className="login-logo">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          {error && (
            <Alert variant="danger" className="alert">
              {error}
            </Alert>
          )}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={emailChangeHandler}
                  onBlur={handleBlurEmail}
                  onFocus={handleFocusEmail}
                />
                <span className="form-pass">{emailError}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={passwordChangeHandler}
                  onBlur={handleBlurPassword}
                  onFocus={handleFocusPassword}
                />
                <span className="form-pass">{passwordError}</span>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="login-btn"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
