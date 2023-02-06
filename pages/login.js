import React from "react";

//INTERNAL IMPORT
import Style from "../styles/Login.module.css";
import LoginSignUp from "../loginSignupComps/LoginSignup";

const login = () => {
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Login</h1>
        <LoginSignUp />
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default login;