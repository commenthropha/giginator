import { cookies } from "next/headers";
import { SupabaseClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Card from "./Card";

const Events = async () => {
  const supabase: SupabaseClient = createServerComponentClient({ cookies });
    const {data: events} = await supabase.from("events").select().limit(4);

  return (
    <>
      <h1 className="title is-1 is-size-2-mobile has-text-centered has-text-weight-semibold gradient-text p-6">
        See a selection of our events below:
      </h1>
      <div className="columns m-4">
          {events?.map((event: DBEvent) => (
            <Card key = {event.id} {...event}/>
          ))}
      </div>
      <h1 className="title is-3 is-size-4-mobile has-text-centered has-text-weight-semibold p-6">
        You can see all of our events <a className="gradient-text">here</a>
      </h1>
    </>
  );
};

export default Events;
