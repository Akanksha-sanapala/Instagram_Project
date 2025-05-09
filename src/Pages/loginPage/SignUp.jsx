import React from "react";
import * as Yup from "yup";

import { Form, Formik } from "formik";
import TextFieldComponent from "../../components/form/textFieldComponent";

import InstaLabel from "../../assets/instaLabel.png";
import SignUpFb from "../../assets/signUpFb.png";
import Gplay from "../../assets/gPlay.png";
import Microsoft from "../../assets/microsoft.png";

import { useNavigate } from "react-router-dom";

import "../../pages/loginPage/login.css";

function SignUp() {
  //   const navigate = useNavigate();

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

  const goToLoginPage = () => {
    navigate("");
  };
  return (
    <>
      <div
        style={{
          border: "1px solid rgb(219, 219, 219)",
          width: "350px",
          paddingBottom: "10px",
          margin: "auto",
          padding: "10px 10px",
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
                  marginTop: "40px",
                }}
              >
                {/* Instagram label with content  */}
                <div>
                  <img
                    style={{ height: "61px", width: "175px" }}
                    src={InstaLabel}
                    alt="Login"
                  />

                  <div
                    className="insta-text-signup"
                    style={{ position: "relative", left: "40px" }}
                  >
                    Sign up to see photos and videos from your friends.
                  </div>
                </div>

                {/* Login with facebook */}
                <div
                  className="login-fb-btn"
                  style={{
                    width: "70%",
                    height: "30px",
                    display: "flex",
                    gap: "7px",
                    textAlign: "center",
                    justifyContent: "center",
                    position: "relative",
                    left: "40px",
                    top: "5px",
                  }}
                >
                  <img
                    style={{
                      height: "16px",
                      width: "14px",
                      marginTop: "5px",
                    }}
                    src={SignUpFb}
                  />

                  <div
                    className="login-fb "
                    style={{ color: "white", marginTop: "3px" }}
                  >
                    Log in with Facebook
                  </div>
                </div>

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

                      {/* content  */}

                      <div>
                        <div className="content">
                          People who use our service may have uploaded your
                          contact information to Instagram.{" "}
                          <a
                            className="links"
                            href="https://www.facebook.com/help/instagram/261704639352628"
                            target="_blank"
                          >
                            Learn More
                          </a>
                          <div className="content">
                            By signing up, you agree to our
                            <a
                              href="https://help.instagram.com/581066165581870/?locale=en_US"
                              target="_blank"
                            >
                              Terms
                            </a>
                            <span> , </span>
                            <a
                              href="https://www.facebook.com/privacy/policy"
                              target="_blank"
                            >
                              Privacy Policy
                            </a>
                            <span> and </span>
                            <a
                              href="https://privacycenter.instagram.com/policies/cookies/"
                              target="_blank"
                            >
                              Cookies Policy
                            </a>
                            <span> . </span>
                          </div>
                        </div>
                      </div>
                      {/* SignUp button  */}

                      <div
                        className="login-button fontStyles"
                        style={{
                          color: "white",
                          fontWeight: "500",
                          width: "80%",
                          position: "relative",
                          left: "10%",
                        }}
                      >
                        Sign up
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Log in  */}
      <div
        style={{
          border: "1px solid rgb(219, 219, 219)",
          padding: "15px",
          width: "40%",
          position: "relative",
          left: "28%",
          marginTop: "10px",
        }}
      >
        <div className="account">Have an account?</div>
        <div className="sign-up" onClick={() => goToLoginPage()}>
          Log in
        </div>
      </div>

      {/* Get the app  */}
      <div style={{ marginTop: "15px" }}>
        <div className="account">Get the app.</div>
        <div
          style={{
            display: "flex",
            gap: "10px",

            marginLeft: "290px",
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D24CE4C45-2F78-412C-8061-9320404A5705%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F"
            target="_blank"
          >
            <img style={{ height: "40px", width: "134px" }} src={Gplay} />
          </a>

          <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1366%2C738">
            <img style={{ height: "40px", width: "134px" }} src={Microsoft} />
          </a>
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
}

export default SignUp;
