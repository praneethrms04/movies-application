import { useState } from "react";
import Navbar from "../../components/header/Navbar";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/signup";

const Authentication = () => {
  const [showSignup, setShowSignup] = useState(true);
  const gotoLogin = () => {
    setShowSignup(false);
  };
  const gotoSignup = () => {
    setShowSignup(true);
  };

  return (
    <>
      <Navbar />
      {showSignup ? (
        <Signup goToLogin={gotoLogin}  />
      ) : (
        <Login goToSignup={gotoSignup} />
      )}
    </>
  );
};

export default Authentication;
