"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { GrUser } from "react-icons/gr";

/*
 * Button refactored into separate component for client-side handling
 */
const UserTestButton = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email: "user@test",
      password: "test",
    });
  };

  return (
    <button
      className="button is-medium is-warning is-small-mobile is-flex p-3 is-justify-content-space-between"
      style={{ width: "275px" }}
      onClick={async () => {
        await handleSignIn();
        router.push("/dashboard");
        router.refresh();
      }}
    >
      <GrUser />
      <p style={{ fontSize: "1.125rem" }}>User Test Account</p>
    </button>
  );
};

export default UserTestButton;
