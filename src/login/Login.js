import Navbar from "../navbar/Navbar";
import "./Login.css";
import React, { useState } from "react";

function Login() {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = () => {
    if (!loginName || !loginPassword) {
      setErrorMessage("لطفا یوزر و پسورد را وارد کنید ");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div style={{ overflew: "hidden" }}>
      <Navbar />
      <div className="form-wrap">
        <div className="login">
          <h1>Log in</h1>
          <label htmlFor="loginName">Username</label>
          <input
            type="text"
            id="loginName"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
            placeholder="Username"
          />
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <div className="loginButton" onClick={handleLogin}>Log in</div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}
export default Login;
