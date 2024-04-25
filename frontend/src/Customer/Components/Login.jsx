import React, { useState } from "react";
import "../Components/styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newUsername, setNewUsername] = useState(""); 
  const [password1, setPassword1] = useState(""); 
  const [password2, setPassword2] = useState(""); 
  const [signupDisabled, setSignupDisabled] = useState(true);

  const [error, setError] = useState("");

  const handleLogin = () => {
    // Check if username and password are valid
    if (username === "user" && password === "password") {
      // If valid, redirect to dashboard or perform any desired action
      alert("Login successful");
      setError("");
    } else {
      // If invalid, display error message
      setError("Invalid username or password");
    }
  };

  const handleSignup = () => {
    if (password1 === password2) {
      console.log("Signup logic goes here");
      setError("");
    } else {
      setError("Passwords do not match");
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    if (name === "password1") {
      setPassword1(value);
    } else if (name === "password2") {
      setPassword2(value);
    }

    // Check if passwords match
    setSignupDisabled(password1 !== password2);
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
    setUsername("");
    setPassword("");
    setNewUsername("");
    setPassword1("");
    setPassword2("");
    setError("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column w-90 ">
      <h2 className="p-3 pt-4">{showLogin ? "LOGIN" : "SIGN-UP"}</h2>
      {error && <p className="error">{error}</p>}
      <form>
        {showLogin ? (
            //Login display
          <div className="inner-container">
            <div className="form-group ">
              <label className="pb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter email / mobile"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="p-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container d-flex justify-content-center align-items-center pt-4 pb-4  flex-column ">
              <button
                type="button"
                className=" button p-2 "
                onClick={handleLogin}
              >
                Login
              </button>
              <button type="button" className="btn btn-primary bg-white pt-4">
                <FontAwesomeIcon className="text-dark" icon={faG} />{" "}
                <span style={{ textDecoration: "none" }}>
                  Log in with Google
                </span>
              </button>
            </div>
            <span>Forget Password ?</span>
            <p>
              Don't have an account? <span onClick={toggleForm}> Sign Up</span>
            </p>
          </div>
        ) : (
            // sign-up display
          <div className="inner-container">
            <div className="form-group">
              <label className="pb-2" htmlFor="newUsername">
                New Username
              </label>
              <input
                type="text"
                className="form-control"
                id="newUsername"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="p-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={password1}
                placeholder="password"
                onChange={(e) => handlePasswordChange}
              />
              <br />
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={password2}
                placeholder="confirm-password"
                onChange={(e) => handlePasswordChange}
              />
            </div>
            <div className="button-container d-flex justify-content-center align-items-center pt-4 pb-4  flex-column ">
              <button
                type="button"
                className=" button p-2 "
                onClick={handleSignup}
                disabled={signupDisabled}
              >
                Sign-Up
              </button>
              <div className="pt-2">
                <p>or</p>
              </div>
              <button type="button" className="btn btn-primary bg-white ">
                <FontAwesomeIcon className="text-dark" icon={faG} />{" "}
                <span style={{ textDecoration: "none" }}>
                  Log in with Google
                </span>
              </button>
            </div>
            <p>
              Don't have an account? <span onClick={toggleForm}> Sign Up</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
