import Header from "../[global]/Header"
import { SupabaseClient } from "@supabase/supabase-js";
import EventCard from "./components/EventCard";
import {initialiseSupabase} from "../[queries]";

const Events = async () => {

  const supabase: SupabaseClient = await initialiseSupabase();
  const {data: events} = await supabase.from("events").select();

  return (
    <main>
      <Header title = "Events" />
      <div className="my-6">
        {events?.map((event: DBEvent) => (
          <EventCard key={event.id} cardType="standard" event={event} text=""/>
        ))}
      </div>
    </main>
  )
}

export default Events