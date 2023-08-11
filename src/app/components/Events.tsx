import { cookies } from "next/headers";
import { SupabaseClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const Events = async () => {
  const supabase: SupabaseClient = createServerComponentClient({ cookies });
    const {data: events} = await supabase.from("events").select();

  return (
    <>
      <h1 className="title is-1 is-size-2-mobile has-text-centered has-text-weight-semibold gradient-text p-6">
        See a selection of our events below:
      </h1>
      <div className="columns m-4">
        <ul>
          {events?.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
      <h1 className="title is-3 is-size-4-mobile has-text-centered has-text-weight-semibold purple p-6">
        You can see all of our events <a className="gradient-text">here</a>
      </h1>
    </>
  );
};

export default Events;
