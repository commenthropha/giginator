import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import initialiseSupabase from "./initialiseSupabase";
import { getSession } from ".";

const isUserOrganiser = async () => {
  const supabase: SupabaseClient = await initialiseSupabase();
  const session = await getSession();

  return await supabase
    .from("profiles")
    .select("organiser")
    .eq("id", session?.user.id);
};

export default isUserOrganiser;
