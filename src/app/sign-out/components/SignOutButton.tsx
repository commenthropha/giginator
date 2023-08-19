"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignOutButton = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  return (
    <div className="control">
      <button
        className="button is-light"
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/");
          router.refresh();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
