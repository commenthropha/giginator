import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getOrganisedEvents, getUserEvents } from ".";
import { cookies } from "next/headers";

const getOtherEvents = async (limit: number | null) => {
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });
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

    return events;
  } else {
    return null;
  }
};

export default getOtherEvents;
