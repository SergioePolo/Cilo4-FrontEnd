import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <button>Register</button>
      <Link to="/Register">Register</Link>
    </div>
  );
};

export default Login;
