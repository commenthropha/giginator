import React from "react";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import CancelButton from "./CancelButton";
import styles from "./styles/Form.module.css";

const Form = () => {
  return (
    <div
      className={`is-flex is-justify-content-space-between is-align-items-center is-flex-direction-column center gradient-box ${styles.formContainer}`}
    >
      <h1 className="has-text-centered text-focus-in has-text-white title is-1 is-size-2-mobile center px-3">
        Sign Out
      </h1>
      <h2 className="has-text-centered text-focus-in has-text-white title is-3 is-size-4-mobile center px-3">
        {`Are you sure you'd like to sign out?`}
      </h2>
      <div className="has-text-centered field is-grouped my-5">
        <SignOutButton />
        <CancelButton />
      </div>
    </div>
  );
};

export default Form;
