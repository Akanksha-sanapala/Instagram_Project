import React from "react";

import InstaLabel from "../../assets/instaLabel.png";

const ForgotPassword = () => {
  return (
    <>
      <div style={{}}>
        <div
          style={{
            // border: "1px solid rgb(219, 219, 219)",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "10px",
            borderBottom: "1px solid rgb(219, 219, 219)",
            alignItems: "center",
            transition: "height .2s ease-in-out",
            width: "100%",
            zIndex: "3",
            boxSizing: "border-box",
          }}
        >
          <div>
            <img
              style={{ height: "29px", width: "103px" }}
              src={InstaLabel}
              alt="Login"
            />
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              className="login-button"
              style={{
                color: "white",
                width: "fit-content",
              }}
            >
              Log In
            </div>
            <div>Sign Up</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
