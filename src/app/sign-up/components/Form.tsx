"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles/Form.module.css";

const ClearInput = (input:string) => {
  const inputField = document.getElementById(`${input}Input`);
  const helpText = document.getElementById(`help-${input}`);

  inputField?.classList.remove(
    "is-danger",
    "has-background-danger",
    "has-text-white"
  );

  helpText?.remove();
}

const AddInputMessage = (input: string, message: string) => {
  const primaryDiv = document.getElementById(input);
  const inputField = document.getElementById(`${input}Input`);

  if (inputField?.classList.contains("is-danger")) {
    // @ts-ignore
    primaryDiv.lastChild.innerHTML = message;
    return;
  } else {
    inputField?.classList.add(
      "is-danger",
      "has-background-danger",
      "has-text-white"
    );
    const helpElement = document.createElement("p");
    helpElement.id = `help-${input}`
    helpElement.classList.add("help", "has-text-white");
    helpElement.innerHTML = message; 
    primaryDiv?.appendChild(helpElement);
  }
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputs = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  // @ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    let flag: boolean = false;

    for (let [key, value] of Object.entries(inputs)) {
      ClearInput(key);
      if (value == "") {
        AddInputMessage(key, "This field has been left empty.");
        flag = true;
      }
    } 
    
    if (flag) {
      return;
    }

    if (password != confirmPassword) {
      AddInputMessage("confirmPassword", "Your passwords do not match.");
      return;
    }

    console.log("Form submitted:", email, password);
  };

  return (
    <div
      className={`is-fullheight is-flex is-justify-content-center is-align-items-center ${styles.fullHeight}`}
    >
      <div className={`center gradient-box ${styles.formContainer}`}>
        <h1 className="has-text-centered text-focus-in has-text-white title is-1 is-size-2-mobile center px-3">
          Sign Up
        </h1>
        <form id="main" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Form;
