import {initialiseSupabase} from "../../[queries]";
import { SupabaseClient } from "@supabase/supabase-js";
import { Header } from "@/app/(global)"
import EventCard from "./EventCard"

const PublicPage = async () => {
    const supabase: SupabaseClient = await initialiseSupabase();
    const {data: events} = await supabase.from("events").select();
  
  return (
    <main>
    <Header title = "Events" />
    <div className="my-6">
      {events?.map((event: DBEvent) => (
        <EventCard key={event.id} cardType="standard" event={event}/>
      ))}
    </div>
  </main>
  )
}

export default PublicPage