import { useState } from "react";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/signup";
import "./authentication.css";
const Authentication = () => {
  const [showSignup, setShowSignup] = useState(true);
  const gotoLogin = () => {
    setShowSignup(false);
  };

  const gotoSignup = () => {
    setShowSignup(true);
  };
  return (

    <div>
    {
      showSignup ? (<Signup goToLogin ={gotoLogin} />) : (<Login goToSignup={gotoSignup} />)
    }
      
    </div>
  );
};

export default Authentication;