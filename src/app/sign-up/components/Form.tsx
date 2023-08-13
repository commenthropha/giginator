import Link from "next/link";
import styles from "./styles/Form.module.css";

const Form = () => {
  return (
    <div className={`is-fullheight is-flex is-justify-content-center is-align-items-center ${styles.fullHeight}`}>
        <div className={`center gradient-box ${styles.formContainer}`}>
          <h1 className=" has-text-centered text-focus-in has-text-white title is-1 is-size-2-mobile center px-3">
            Sign Up
          </h1>
          <form id="main" method="post">
            <div className="field pt-2">
              <label htmlFor="email" className="label has-text-white">
                Email
              </label>
              <div className="control">
                <input
                  name="email"
                  className="input"
                  type="text"
                  placeholder="Enter Your Email"
                  value=""
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label has-text-white">
                Password
              </label>
              <div className="control">
                <input
                  name="password"
                  className="input"
                  type="password"
                  placeholder="Enter Your Password"
                  value=""
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="confirm" className="label has-text-white">
                Confirm Password
              </label>
              <div className="control">
                <input
                  name="confirm"
                  className="input"
                  type="password"
                  placeholder="Confirm Your Password"
                  value=""
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
              <button className="mx-1 button is-medium is-light">
                <strong>Sign Up</strong>
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default Form;
