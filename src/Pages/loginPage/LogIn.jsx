import React from "react";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import TextFieldComponent from "../../components/form/textFieldComponent";

import LoginPageImage from "../../assets/loginPage.png";
import InstaLabel from "../../assets/instaLabel.png";
import FbLogo from "../../assets/fbLogo.png";

import "../../pages/loginPage/login.css";

function LogIn() {
  const validationSchema = Yup.object({
    userName: Yup.mixed().required(" is required"),
    password: Yup.mixed().required("Lead Status is required"),
  });

  const initialValues = {
    userName: null,
    password: null,
  };

  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
        <div style={{ height: "100%", display: "flex", gap: "20px" }}>
          <div>
            <img style={{ height: "450px" }} src={LoginPageImage} alt="Login" />
          </div>
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
                            label="Phone number, username, or email"
                            name="userName"
                          />
                        </div>
                        <div>
                          <TextFieldComponent
                            label="Password"
                            name="password"
                          />
                        </div>

                        {/* Login button  */}

                        <div
                          className="login-button fontStyles"
                          style={{
                            height: "30px",
                            color: "white",
                            fontWeight: "500",
                            width: "100%",
                          }}
                        >
                          Log in
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
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

                {/* Login with facebook */}
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                    margin: "15px 30px",
                  }}
                >
                  <img style={{ height: "20px", width: "20px" }} src={FbLogo} />

                  <div className="login-fb ">Log in with Facebook</div>
                </div>

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

        {/* Links at last  */}
        <div style={{ display: "flex", gap: "15px" }}>
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

          <a href="https://www.instagram.com/web/lite/" target="_self">
            <span className="links-atlast">Instagram Lite</span>
          </a>

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
            gap: "15px",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            bottom: "45px",
          }}
        >
          <div className="language">English</div>
          <div className="language">@ 2025 Instagram from Meta</div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
