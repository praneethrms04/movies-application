import { useState } from "react";
import "./login.css";

const Login = (props) => {
  const { goToSignup } = props;
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { userId, password };
    console.log(data);
    // onLoginSumbit(data);
  };

  return (
    <div className="main">
      <div className="form-body-login">
        <p className="userlogin">SignIn to your accout</p>
        <div>
          <form onSubmit={handleSubmit}>
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
              <input className="login-btn" type="submit" value="Log In" />
            </div>
            <div className="signup">
              You Don't have an account ?
              <p className="pointer" onClick={goToSignup}>
                Signup
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
