import React from "react";
import '../css/auth.css';

function SignupPage() {

    return (
        <div className="signup-form">
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">submit</button>
        </div>
      )
}

export default SignupPage;
