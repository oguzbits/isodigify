import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";

import Particles from "react-particles-js";
import ParticlesProps from "../particlesjs-config.json";

import logo from "../../images/logo.svg";

import "./signUpPage.scss";

function Copyright() {
  return (
    <div>
      {"Copyright © "}
      <Link to={"/"}>isodigify</Link> {new Date().getFullYear()}
      {"."}
    </div>
  );
}

const MyTextField = ({ ...props }) => {
  const [field, meta] = useField({ ...props });
  // const errorText = meta.error && meta.touched ? meta.error : "";
  const errorText = meta.error && meta.touched ? "(Required)" : "";
  return (
    <TextField {...field} {...props} helperText={errorText} error={!!errorText} />
  );
};

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8)
});

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-header">
          <img className="isodigify-logo" src={logo} alt="isodigify-logo" />
          <h1>Sign up for a 14 day free trial.</h1>
          <p>No credit card required</p>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
        >
          <Form className="form">
            <div className="form name">
              <MyTextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
              />
              <MyTextField
                variant="outlined"
                fullWidth
                required
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </div>
            <div className="form mail">
              <MyTextField
                variant="outlined"
                placeholder="myemail@example.com"
                fullWidth
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <MyTextField
                variant="outlined"
                placeholder="Minimum 8 characters"
                fullWidth
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </div>
            <div className="form control">
              <FormControlLabel
                control={
                  <Checkbox required value="allowExtraEmails" color="primary" />
                }
                label="I have read and agree to the privacy policy and terms of service."
              />
            </div>
            <div className="form signup-button">
              <button className="button submit" type="submit">
                Sign up
              </button>
            </div>
            <div className="form end">
              <h4>Already have an account?</h4>
              <Link to={"/login"}>Log in</Link>
              <Copyright />
            </div>
          </Form>
        </Formik>
      </div>
      <div className="particles">
        <Particles params={ParticlesProps} />
      </div>
    </div>
  );
}
