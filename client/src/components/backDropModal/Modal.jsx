import React from "react";
import "../backDropModal/modal.css";

const Modal = ({ type, isModalOpen }) => {
  return (
    <div className="overlay">
      <div className="modal">
        {type === "reg" ? (
          <>
            <div className="formTitle">Sign up</div>
            <div className="inputBlock">
              <input className="formInput" placeholder="Name" type="text" />
              <input className="formInput" placeholder="Email" type="text" />
              <input className="formInput" placeholder="Password" type="text" />
            </div>
            <button className="loginBtn">Sign up</button>
          </>
        ) : (
          <>
            <div className="formTitle">Sign in</div>
            <div className="inputBlock">
              <input className="formInput" placeholder="Email" type="text" />
              <input className="formInput" placeholder="Password" type="text" />
            </div>
            <button className="loginBtn">Sign in</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
