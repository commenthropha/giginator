import React from "react";
import styles from "./styles/Form.module.css";
import { Button, OrganiserTestButton, UserTestButton } from ".";

/*
 * Form to provide user with different sign in choices
 */
const Form = () => {
  return (
    <div
      className={`is-flex is-justify-content-space-between is-align-items-center is-flex-direction-column center gradient-box ${styles.formContainer}`}
    >
      <h1 className="has-text-centered text-focus-in has-text-white title is-2 is-size-3-mobile center px-3">
        Sign In
      </h1>
      <div className="has-text-centered field my-5">
        <Button />
      </div>
      <label className="label has-text-centered has-text-white ">
        {`Don't want to authenticate with Github?`} <br></br>
      </label>
      <div className="has-text-centered field mt-3">
        <UserTestButton />
      </div>
      <div className="has-text-centered field">
        <OrganiserTestButton />
      </div>
    </div>
  );
};

export default Form;
