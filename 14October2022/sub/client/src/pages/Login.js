import React, { useState } from "react";

import lock from "./lock1.jpg";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  // const navigate = useNavigate();

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
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i;

    if (!password || regexPassword.test(password) === false) {
      setPasswordError("Please enter the valid password");
    } else {
      setPasswordError("");
    }
    try {
      // navigate("/");
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

  return (
    <>
      <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
        <div className="wrapper">
          <div className="logo">
            <img src={lock} alt="" />
          </div>
          <div className="text-center mt-4 name">Login</div>
          <form className="p-3 mt-3" onSubmit={handleSubmit}>
            <div className="data-div">
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  name="email"
                  onChange={emailChangeHandler}
                  onBlur={handleBlurEmail}
                  onFocus={handleFocusEmail}
                />
              </div>
              <div>
                <span className="form-pass">{emailError}</span>
              </div>
            </div>
            <div className="data-div">
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={passwordChangeHandler}
                  onBlur={handleBlurPassword}
                  onFocus={handleFocusPassword}
                />
              </div>

              <div>
                <span className="form-pass">{passwordError}</span>
              </div>
            </div>

            <button className="btn login-text">Login</button>
          </form>
          <div className="text-center fs-6">
            <Link className="login-text" to="/register">
              Don't have an account? Sign Up here..
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
