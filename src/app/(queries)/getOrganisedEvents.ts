import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getSession, isUserOrganiser } from ".";

const getOrganisedEvents = async () => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve session data
  const session = await getSession();

  // Check if a current user is an organiser
  const isOrganiser = await isUserOrganiser();

  if (isOrganiser) {
    // Get the organised event IDs from the association table
    const { data: organisedEvents } = await supabase
      .from("event_organisers")
      .select("organised_event_id")
      .eq("organiser_id", session?.user.id);

    if (organisedEvents) {
      // Extract the event IDs
      const eventIds = organisedEvents.map((e) => e.organised_event_id);

      // Get the events associated with the IDs from the events table
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
