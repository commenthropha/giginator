"use client";
import {GrUserAdmin} from "react-icons/gr"

const OrganiserTestButton = () => {
  return (
    <button className="button is-medium is-warning is-small-mobile is-flex p-3 is-justify-content-space-between" style={{width: "275px"}}>
      <GrUserAdmin />
      <p style={{fontSize: "1.125rem"}}>Organiser Test Account</p>
    </button>
  );
};

export default OrganiserTestButton;
