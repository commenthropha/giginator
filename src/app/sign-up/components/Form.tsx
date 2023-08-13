"use client"

import React from "react";
import Link from "next/link";
import styles from "./styles/Form.module.css";
import ReactPasswordChecklist from "react-password-checklist";
import ValidateForm from "./validateForm";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // @ts-ignore
  const handleSubmit = (event) => {
    const isValidForm = ValidateForm({ email, password, confirmPassword });

    if (!isValidForm) {
      event.preventDefault(); // Prevent default form submission
    }
  };

  return (
    <div className={`is-fullheight is-flex is-justify-content-center is-align-items-center ${styles.fullHeight}`}>
      <div className={`center gradient-box ${styles.formContainer}`}>
        <h1 className="has-text-centered text-focus-in has-text-white title is-1 is-size-2-mobile center px-3">
          Sign Up
        </h1>
        <form
          id="main"
          className="my-5"
          action="your-api-endpoint-here" // Set your API endpoint URL here
          method="POST"
          onSubmit={handleSubmit}
        >

          <div id="email" className="field pt-2">
            <label htmlFor="email" className="label has-text-white">
              Email
            </label>
            <div className="control">
              <input
                id="emailInput"
                name="email"
                className="input"
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div id="password" className="field">
            <label htmlFor="password" className="label has-text-white">
              Password
            </label>
            <div className="control">
              <input
                id="passwordInput"
                name="password"
                className="input"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div id="confirmPassword" className="field">
            <label htmlFor="confirm" className="label has-text-white">
              Confirm Password
            </label>
            <div className="control">
              <input
                id="confirmPasswordInput"
                name="confirm"
                className="input"
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="field my-5">
            <label className="label has-text-white">
              {`Already have an account?`} <br />
              <Link className="has-text-warning" href="/sign-in">
                Sign In Here
              </Link>
            </label>
          </div>
          <div className="center has-text-centered mx-2">
            <button type="submit" className="mx-1 button is-medium is-light">
              <strong>Sign Up</strong>
            </button>
          </div>
        </form>
        <ReactPasswordChecklist
          className="box has-background-warning p-5 mt-6"
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={8}
          value={password}
          valueAgain={confirmPassword}
        />
      </div>
    </div>
  );
};

export default Form;
