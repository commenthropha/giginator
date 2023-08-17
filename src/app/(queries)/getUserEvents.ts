import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { getSession } from ".";
import { cookies } from "next/headers";

const getUserEvents = async () => {
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });
  const session = await getSession();

  const { data: userEvents } = await supabase
    .from("event_profiles")
    .select("event_id")
    .eq("profile_id", session?.user.id);

    if (userEvents) {
        const eventIds = userEvents.map((event) => event.event_id);

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