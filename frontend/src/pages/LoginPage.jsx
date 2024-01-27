import React from "react";
import '../css/auth.css';

function LoginPage() {

  return (
    <div className="login-form">
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">submit</button>
    </div>
  )
}

export default LoginPage;
