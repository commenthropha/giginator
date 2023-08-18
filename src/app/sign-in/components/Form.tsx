import React from "react";
import Link from "next/link";
import styles from "./styles/Form.module.css";
import { Button, OrganiserTestButton, UserTestButton } from ".";

const Form = () => {
  return (
    <div
      className={`is-flex is-justify-content-space-between is-align-items-center is-flex-direction-column center gradient-box ${styles.formContainer}`}
    >
      <h1 className="has-text-centered text-focus-in has-text-white title is-1 is-size-2-mobile center px-3">
        Sign In
      </h1>
      <div className="has-text-centered field my-5">
        <Button />
      </div>
      <div className="center has-text-centered field my-5">
        <label className="label has-text-white ">
          {`Don't want to authenticate with Github?`} <br></br>
        </label>
        <UserTestButton />
        <OrganiserTestButton />
      </div>
    </div>
  );
};

export default Form;
