import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import initialiseSupabase from "./initialiseSupabase";
import { getSession, isUserOrganiser } from "./";

const getOrganisedEvents = async () => {
  const supabase: SupabaseClient = await initialiseSupabase();
  const session = await getSession();
  const isOrganiser = await isUserOrganiser();

  if (isOrganiser) {
    const { data: organisedEvents } = await supabase
    .from("event_profiles")
    .select("event_id")
    .eq("profile_id", session?.user.id);

    return organisedEvents ? organisedEvents : null;
  } else {
    return null;
  }
};

export default getOrganisedEvents;
