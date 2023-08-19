import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { getOrganisedEvents, getUserEvents } from ".";
import { cookies } from "next/headers";

/* Allows specification of a limit for the maximum number of
   database entries to return; returns all of them if left undefined */
const getOtherEvents = async (limit: number | null) => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve user event data
  const userEvents: DBEvent[] | null = await getUserEvents();

  // Retrieve organised user event data
  const organisedEvents: DBEvent[] | null = await getOrganisedEvents();

  // If the user has already booked some events
  if (userEvents) {
    const eventIds = `(${userEvents
      .map((e) => e.id) // Extract user event IDs
      .concat(
        // Concatenate this array with
        organisedEvents
          ? organisedEvents.map(
              (o) => o.id // Extract organised event IDs, if they exist
            )
          : []
      ) // An empty array, if no organised events
      .join(", ")})`; // Join method to turn this array into a string

    // Return all of the database events, except those ones
    const { data: events } = limit
      ? await supabase
          .from("events")
          .select()
          .not("id", "in", `${eventIds}`)
          .limit(limit)
      : await supabase.from("events").select().not("id", "in", eventIds);

    return events;
  }

  // Otherwise, if the user hasn't booked any events
  else {
    // Return all of the database events without any filters
    const { data: events } = limit
      ? await supabase.from("events").select().limit(limit)
      : await supabase.from("events").select();

    return events;
  }
};

export default getOtherEvents;
