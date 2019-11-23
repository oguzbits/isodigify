import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { Formik, Form, useField } from "formik";
import * as yup from "yup";

import Particles from "react-particles-js";
import ParticlesProps from "../particlesjs-config.json";

import logo from "../../images/logo.svg";

import "./logInPage.scss";

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
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8)
});

export default function LogInPage() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <img className="isodigify-logo" src={logo} alt="isodigify-logo" />
          <h1>Log in</h1>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
        >
          <Form className="form">
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
            <div className="form login-button">
              <button className="button submit" type="submit">
                Log in
              </button>
            </div>
            <div className="form end">
              <h4>No account yet?</h4>
              <Link to={"/signup"}>Create your account here!</Link>
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