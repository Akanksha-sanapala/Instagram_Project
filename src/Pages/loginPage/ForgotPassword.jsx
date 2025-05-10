import React from "react";

import InstaLabel from "../../assets/instaLabel.png";
import lockPwd from "../../assets/lockPwd.jpg";

import "../loginPage/LogIn.css";

const ForgotPassword = () => {
  return (
    <>
      <div>
        {/* nav bar  */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            borderBottom: "1px solid rgb(219, 219, 219)",
            alignItems: "center",
            width: "100%",
            height: "60px",
            position: "sticky",
            top: "0px",
          }}
        >
          <div>
            <img
              style={{ height: "29px", width: "103px" }}
              src={InstaLabel}
              alt="Login"
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="login-button font-styles"
              style={{
                display: "flex",
                color: "white",
                width: "fit-content",
                padding: "7px 15px",
                height: "22px",
                alignTtems: "center",
                justifyContent: "center",
              }}
            >
              Log In
            </div>
            <div className="sign-up" style={{ fontWeight: "600" }}>
              Sign Up
            </div>
          </div>
        </div>

        {/* lock image  */}

        {/* border  */}
        <div
          style={{
            border: "1px solid rgb(219, 219, 219)",
            margin: "auto",
            marginTop: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "auto",
            width: "388px",
            flexGrow: "1",
            height: "400px",
          }}
        >
          <div style={{ marginBottom: "20%" }}>
            <div className="circle-lock ">
              <img
                style={{ height: "60px", width: "60px", marginTop: "17px" }}
                src={lockPwd}
              />
            </div>
          </div>
          <div className="trouble">Trouble logging in?</div>
          <div className="content-pwd">
            Enter your email, phone, or username and we'll send you a link to
            get back into your account.
          </div>

          {/* email input  */}
          <div>
            <input
              placeholder="Email, Phone, or Username"
              className="input-forgot"
            ></input>
          </div>

          <a
            href="https://www.meta.com/about/?utm_source=about.meta.com&utm_medium=redirect"
            target="_self"
          >
            <span className="reset">Can't reset your password?</span>
          </a>

          {/* or  */}
          <div style={{ display: "flex" }}>
            <hr
              style={{
                width: "35%",
                height: "0px",
                color: "rgb(115, 115, 115)",
              }}
            ></hr>
            <div
              className="fontStyles"
              style={{
                fontWeight: "600",
                fontSize: ".8125rem",
                margin: "0px 20px",
                color: "rgb(115, 115, 115)",
              }}
            >
              OR
            </div>

            <hr
              style={{
                width: "35%",
                height: "0px",
                backgroundColor: " rgb(219, 219, 219)",
              }}
            ></hr>
          </div>

          {/* new account  */}

          <div className="new-account">Create new account</div>

          {/* login  */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgb(115, 115, 115)",
              width: "390px",
            }}
          >
            <div className="back-to-login">Back To Login</div>
          </div>
        </div>
      </div>

      {/* Links at last  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "8%",
        }}
      >
        <a
          href="https://www.meta.com/about/?utm_source=about.meta.com&utm_medium=redirect"
          target="_blank"
        >
          <span className="links-atlast">Meta</span>
        </a>

        <a href="https://about.instagram.com/" target="_blank">
          <span className="links-atlast">About</span>
        </a>

        <a href="https://about.instagram.com/blog" target="_blank">
          <span className="links-atlast">Blog</span>
        </a>

        <a href="https://about.instagram.com/about-us/careers" target="_blank">
          <span className="links-atlast">Jobs</span>
        </a>

        <a href="https://help.instagram.com/" target="_blank">
          <span className="links-atlast">Help</span>
        </a>

        <a
          href="https://developers.facebook.com/docs/instagram-platform"
          target="_blank"
        >
          <span className="links-atlast">API</span>
        </a>

        <a
          href="https://developers.facebook.com/docs/instagram-platform"
          target="_self"
        >
          <span className="links-atlast">Privacy</span>
        </a>

        <a href="https://help.instagram.com/581066165581870/" target="_self">
          <span className="links-atlast">Terms</span>
        </a>

        <a href="https://www.instagram.com/explore/locations/" target="_self">
          <span className="links-atlast">Locations</span>
        </a>

        <a href="https://www.instagram.com/web/lite/" target="_self">
          <div className="links-atlast">InstagramLite</div>
        </a>

        <a
          href="https://developers.facebook.com/docs/instagram-platform"
          target="_blank"
        >
          <span className="links-atlast">Threads</span>
        </a>

        <a href="https://www.instagram.com/web/lite/" target="_self">
          <span className="links-atlast">ContactUploading&NonUsers</span>
        </a>

        <a href="https://www.instagram.com/web/lite/" target="_self">
          <span className="links-atlast">MetaVerified</span>
        </a>
      </div>
      <div className="language">
        English <span> © 2025 Instagram from Meta </span>
      </div>
    </>
  );
};

export default ForgotPassword;
