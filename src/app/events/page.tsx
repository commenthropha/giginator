import { cookies } from "next/headers";
import Header from "../[global]/Header"
import { SupabaseClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Card from "./components/Card";

const Events = async () => {

  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });
  const {data: events} = await supabase.from("events").select().limit(10);

  return (
    <main>
      <Header title = "Events" />
      <div className="my-6">
        {events?.map((event: DBEvent) => (
          <Card key={event.id} cardType="standard" event={event} text=""/>
        ))}
      </div>
    </main>
  )
}

export default Events