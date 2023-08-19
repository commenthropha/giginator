import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { getSession } from ".";
import { cookies } from "next/headers";

const getUserEvents = async () => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve session data
  const session = await getSession();

  // Get the user event IDs from the association table
  const { data: userEvents } = await supabase
    .from("event_profiles")
    .select("event_id")
    .eq("profile_id", session?.user.id);

  if (userEvents) {
    // Extract the event IDs
    const eventIds = userEvents.map((event) => event.event_id);

    // Get the events associated with the IDs from the events table
    const { data: events } = await supabase
      .from("events")
      .select()
      .in("id", eventIds);

    return events;
  } else {
    return null;
  }
};

export default getUserEvents;
