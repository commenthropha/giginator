import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getSession } from ".";
import { cookies } from "next/headers";

const isUserOrganiser = async () => {
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });
  
  const session = await getSession();

  return await supabase
    .from("profiles")
    .select("organiser")
    .eq("id", session?.user.id);
};

export default isUserOrganiser;
