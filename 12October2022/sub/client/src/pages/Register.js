import React, { useState } from "react";

import lock from "./lock1.jpg";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div className="d-flex justify-content-center" style={{ height: "80vh" }}>
        <div className="wrapper">
          <div className="logo">
            <img src={lock} alt="" />
          </div>
          <div className="text-center mt-4 name">Register</div>
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span>
                <i className="fa fa-envelope-open" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                value={name}
                // onClick={setName}
                id="userName"
                placeholder="Username"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="text"
                value={email}
                // onClick={setEmail}
                placeholder="Email"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key"></span>
              <input
                type="password"
                value={password}
                // onClick={setPassword}
                placeholder="Password"
              />
            </div>
            <button className="btn mt-3">Register</button>
          </form>
          <div className="text-center fs-6">
            <Link to="/login">Already have an account? Sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
