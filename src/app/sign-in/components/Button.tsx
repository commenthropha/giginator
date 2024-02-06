"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AiFillGithub } from "react-icons/ai";

/*
 * Button refactored into separate component for client-side handling
 */
const Button = () => {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://giginator.vercel.app/auth/callback",
      },
    });
  };

  return (
    <button onClick={handleSignIn} className="button is-flex p-3 is-justify-content-space-between" style={{width: "275px"}}>
      <AiFillGithub />
      <p className="ml-5">Sign in with GitHub</p>
    </button>
  );
};

export default Button;
