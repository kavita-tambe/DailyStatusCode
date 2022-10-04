import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
const theme = createTheme();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const { user } = useUserAuth();
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
      setPasswordError("Please enter the valid password");
    } else {
      setPasswordError("");
    }
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError("Invalid email and password");
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
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (user) {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <p data-testid="logintext">my form</p>
        <CssBaseline />
        <Box className="login-box">
          <Avatar className="login-logo">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          {error && (
            <Alert variant="danger" className="alert">
              {error}
            </Alert>
          )}
          <Box
            component="form"
            data-testid="formone"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
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
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have an account? Sign Up here..
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
