import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import initialiseSupabase from "./initialiseSupabase";
import { getSession } from "./";

const getOtherEvents = async (limit: number | null) => {
  const supabase: SupabaseClient = await initialiseSupabase();
  const session = await getSession();

  const { data: userEvents } = await supabase
    .from("event_profiles")
    .select("event_id")
    .eq("profile_id", session?.user.id);

  if (userEvents) {
    const eventIds = userEvents.map((event) => event.event_id);

    const { data: events } = limit
      ? await supabase
          .from("events")
          .select()
          .not("id", "in", eventIds)
          .limit(limit)
      : await supabase
          .from("events")
          .select()
          .not("id", "in", eventIds);

    return events;
  } else {
    return null;
  }
};

export default getOtherEvents;
