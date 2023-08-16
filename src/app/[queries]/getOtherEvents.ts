import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import initialiseSupabase from "./initialiseSupabase";
import { getOrganisedEvents, getSession, getUserEvents } from "./";

const getOtherEvents = async (limit: number | null) => {
  const supabase: SupabaseClient = await initialiseSupabase();
  const session = await getSession();
  const userEvents = await getUserEvents();
  const organisedEvents = await getOrganisedEvents();

  if (userEvents) {
    const eventIds = userEvents
      .map((event) => event.event_id)
      .concat(
        organisedEvents
          ? organisedEvents.map(
              (organisedEvent) => organisedEvent.organised_event_id
            )
          : []
      );

    const { data: events } = limit
      ? await supabase
          .from("events")
          .select()
          .not("id", "in", eventIds)
          .limit(limit)
      : await supabase.from("events").select().not("id", "in", eventIds);

    return events;
  } else {
    return null;
  }
};

export default getOtherEvents;
