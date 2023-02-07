import React from "react";
import { useState } from "react";

import "./signup.css";

const Signup = (props) => {
  //onSignupSubmit
  const { onSignupSumbit, goToLogin } = props;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { userId, password, name, email };
    onSignupSumbit(data);
    console.log(data)
  };

  return (
    <div className="main">
      <div className="form-body-signup">
        <p className="userlogin">Sign up</p>
        <div>
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                placeholder="User Id"
                value={userId}
                required
                onChange={(e) => setUserId(e.target.value)}
              />

              <input
                type="password"
                placeholder="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="UserName"
                value={name}
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="button"
                value="Sign Up"
                className="login-btn"
              />
            </div>
            <div className="signup">
              Do you have an account ?
              <p className="pointer" onClick={goToLogin}>
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
