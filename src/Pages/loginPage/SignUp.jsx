import React from "react";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import TextFieldComponent from "../../components/form/textFieldComponent";

import InstaLabel from "../../assets/instaLabel.png";
import SignUpFb from "../../assets/signUpFb.png";
import Gplay from "../../assets/gPlay.png";
import Microsoft from "../../assets/microsoft.png";

import "../../pages/loginPage/login.css";

function SignUp() {
  const validationSchema = Yup.object({
    number: Yup.string().required(" is required"),
    password: Yup.string().required("Lead Status is required"),
    fullName: Yup.string().required("Lead Status is required"),
    userName: Yup.string().required("Lead Status is required"),
  });

  const initialValues = {
    number: "",
    password: "",
    fullName: "",
    userName: "",
  };

  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid rgb(219, 219, 219)",
          height: "679px",
          width: "347px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <div>
            <main style={{ height: "100%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "50px",
                }}
              >
                <div>
                  <img
                    style={{ height: "51px", width: "175px" }}
                    src={InstaLabel}
                    alt="Login"
                  />
                  <div>Sign up to see photos and videos from your friends.</div>
                </div>

                {/* Login with facebook */}
                <div
                  className="login-fb-btn"
                  style={{
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  <img
                    style={{
                      height: "16px",
                      width: "16px",
                    }}
                    src={SignUpFb}
                  />

                  <div className="login-fb " style={{ color: "white" }}>
                    Log in with Facebook
                  </div>
                </div>
                {/* or with borders */}
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "85px",
                      position: "relative",
                      top: "10px",
                      left: "10px",
                    }}
                  >
                    <div
                      style={{ border: "1px solid rgb(206, 202, 202)" }}
                    ></div>
                  </div>

                  <div
                    className="fontStyles"
                    style={{
                      position: "relative",
                      left: "25px",
                      fontWeight: "600",
                      fontSize: ".8125rem",
                    }}
                  >
                    OR
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      width: "85px",
                      position: "relative",
                      top: "10px",
                      left: "40px",
                    }}
                  >
                    <div
                      style={{ border: "1px solid rgb(206, 202, 202)" }}
                    ></div>
                  </div>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    onFormSubmit(values);
                  }}
                >
                  {({ values, setFieldValue, touched, errors }) => (
                    <Form style={{ height: "100%" }}>
                      <div>
                        <div>
                          <TextFieldComponent
                            label="Mobile Number or Email"
                            name="number"
                          />
                        </div>
                        <div>
                          <TextFieldComponent
                            label="Password"
                            name="password"
                          />
                        </div>
                        <div>
                          <TextFieldComponent
                            label="Full Name"
                            name="fullName"
                          />
                        </div>
                        <div>
                          <TextFieldComponent
                            label="Username"
                            name="userName"
                          />
                        </div>
                      </div>

                      {/* Login button  */}

                      <div
                        className="login-button fontStyles"
                        style={{
                          color: "white",
                          fontWeight: "500",
                        }}
                      >
                        Sign up
                      </div>
                    </Form>
                  )}
                </Formik>

                {/* Forget Password  */}
                <div
                  className="forget-password "
                  style={{ marginRight: "15px" }}
                >
                  Forget Password?
                </div>

                {/* Sign up  */}
                <div style={{ margin: "30px" }}>
                  <div className="account">
                    Don't have an account?
                    <span className="sign-up">Sign up</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Log in  */}
        <div
          style={{
            border: "1px solid rgb(219, 219, 219)",
            marginTop: "22px",
            padding: "15px",
          }}
        >
          <div>Have an account?</div>
          <div>Log in</div>
        </div>

        {/* Get the app  */}
        <div style={{ marginTop: "15px" }}>
          <div>Get the app.</div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "15px",
              marginLeft: "25px",
            }}
          >
            <img style={{ height: "40px", width: "134px" }} src={Gplay} />

            <img style={{ height: "40px", width: "134px" }} src={Microsoft} />
          </div>
        </div>

        {/* Links at last  */}
        <div
          style={{
            display: "flex",
            gap: "65px",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
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

          <a href="https://about.instagram.com/blog">
            <span className="links-atlast">Blog</span>
          </a>

          <a href="https://about.instagram.com/about-us/careers">
            <span className="links-atlast">Jobs</span>
          </a>

          <a href="https://help.instagram.com/">
            <span className="links-atlast">Help</span>
          </a>

          <a href="https://developers.facebook.com/docs/instagram-platform">
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

          <div style={{ display: "flex", flexDirection: "row" }}>
            <a href="https://www.instagram.com/web/lite/" target="_self"></a>
            <div className="links-atlast">Instagram Lite</div>
          </div>

          <a href="https://developers.facebook.com/docs/instagram-platform">
            <span className="links-atlast">Threads</span>
          </a>

          <a href="https://www.instagram.com/web/lite/" target="_self">
            <span className="links-atlast">Contact Uploading&Non-Users</span>
          </a>

          <a href="https://www.instagram.com/web/lite/" target="_self">
            <span className="links-atlast">Meta Verified</span>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="language">English</div>
          <div className="language">@ 2025 Instagram from Meta</div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
