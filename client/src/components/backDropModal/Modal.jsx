import React, { useState } from "react";
import "../backDropModal/modal.css";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/userOperations";

const Modal = ({ type, isModalOpen, change }) => {
  const dispatch = useDispatch();
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const [logEmail, setlogEmail] = useState("");
  const [logPass, setlogPass] = useState("");

  const regData = {
    name: regName,
    email: regEmail,
    password: regPass,
  };

  const registerHandler = async (body) => {
    dispatch(userRegister(body));
  };

  const formHandler = (e) => {
    e.preventDefault();
    registerHandler(regData);
  };

  return (
    <div className="overlay">
      <div className="modal">
        {type === "reg" ? (
          <>
            <div className="formTitle">Sign up</div>
            <form onSubmit={formHandler} className="inputBlock">
              <input
                onChange={(e) => setRegName(e.target.value)}
                value={regName}
                className="formInput"
                placeholder="Name"
                type="text"
              />
              <input
                onChange={(e) => setRegEmail(e.target.value)}
                value={regEmail}
                className="formInput"
                placeholder="Email"
                type="email"
              />
              <input
                value={regPass}
                onChange={(e) => setRegPass(e.target.value)}
                className="formInput"
                placeholder="Password"
                type="password"
              />
              <button type="submit" className="loginBtn">
                Sign up
              </button>
              <p className="modalSubTest">
                Do you already have an account?
                <p onClick={() => change(null)}>Sign in</p>
              </p>
            </form>
          </>
        ) : (
          <>
            <div className="formTitle">Sign in</div>
            <div className="inputBlock">
              <input
                value={logEmail}
                className="formInput"
                placeholder="Email"
                type="text"
              />
              <input
                value={logPass}
                className="formInput"
                placeholder="Password"
                type="text"
              />
            </div>
            <button className="loginBtn">Sign in</button>
            <p className="modalSubTest">
              Register a new account
              <p onClick={() => change("reg")}>Sign up</p>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
