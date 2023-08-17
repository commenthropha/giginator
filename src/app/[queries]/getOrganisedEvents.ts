import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getSession, isUserOrganiser } from "./";

const getOrganisedEvents = async () => {
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });

  const session = await getSession();
  const isOrganiser = await isUserOrganiser();

  if (isOrganiser) {
    const { data: organisedEvents } = await supabase
      .from("event_organisers")
      .select("organised_event_id")
      .eq("organiser_id", session?.user.id);

    if (organisedEvents) {
      const eventIds = organisedEvents.map((event) => event.organised_event_id);
          
      const { data: events } = await supabase
        .from("events")
        .select()
        .in("id", eventIds);

      return events;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default getOrganisedEvents;
