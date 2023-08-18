"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { AiFillGithub } from "react-icons/ai";

const Button = () => {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <button onClick={handleSignIn} className="button is-medium is-small-mobile is-flex p-3 is-justify-content-space-between" style={{width: "250px"}}>
      <AiFillGithub />
      <p className="ml-5">Sign in with GitHub</p>
    </button>
  );
};

export default Button;
