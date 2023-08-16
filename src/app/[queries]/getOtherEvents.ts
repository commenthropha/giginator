import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import initialiseSupabase from "./initialiseSupabase";
import { getOrganisedEvents, getSession, getUserEvents } from "./";

const getOtherEvents = async (limit: number | null) => {
  const supabase: SupabaseClient = await initialiseSupabase();
  const userEvents = await getUserEvents();
  const organisedEvents = await getOrganisedEvents();

  if (userEvents) {
    const eventIds = `(${userEvents
      .map((e) => e.id)
      .concat(
        organisedEvents
          ? organisedEvents.map(
              (o) => o.id
            )
          : [])
      .join(", ")})`;

    const { data: events } = limit
      ? await supabase
          .from("events")
          .select()
          .not("id", "in", `${eventIds}`)
          .limit(4)
      : await supabase.from("events").select().not("id", "in", eventIds);

    console.log(events)
    return events;
  } else {
    return null;
  }
};

export default getOtherEvents;
