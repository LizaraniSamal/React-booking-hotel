import React from "react";
import "./loginForm.css";
const LoginForm = () => {
  return (
    <>
      <div className="container">
        <div className=" innerContainer">
          <div className="leftContainer">
            <h1>There’s a smarter way for booking hotel</h1>
            <p>
              Sign up with your phone number and get exclusive access to
              discounts and savings your money.
            </p>
          </div>
        </div>

        <div className=" innerContainer">
          <div className="loginConatainer">
            <h1>Login</h1>
            <form className="formInputContainer">
              <input
                type="email"
                placeholder="email"
                className="inputField"
              ></input>
              <input
                type="password"
                placeholder="password"
                className="inputField"
              />
              <button className="loginBtn">Login</button>
              <p className="signUpPara">Don't have</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
