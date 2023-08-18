"use client";
import {GrUser} from "react-icons/gr"

const UserTestButton = () => {
  return (
    <button className="button is-medium is-warning is-small-mobile is-flex p-3 is-justify-content-space-between" style={{width: "275px"}}>
      <GrUser />
      <p style={{fontSize: "1.125rem"}}>User Test Account</p>
    </button>
  )
}

export default UserTestButton