import { cookies } from "next/headers";
import Header from "../[global]/Header"
import { SupabaseClient } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import CardL from "../[global]/CardL";

const WhatsOn = async () => {

  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });
  const {data: events} = await supabase.from("events").select().limit(4);

  return (
    <main>
      <Header title = "What's On" />
      <div className="my-6">
        {events?.map((event: DBEvent) => (
          <CardL key={event.id} cardType="standard" event={event} />
        ))}
      </div>
    </main>
  )
}

export default WhatsOn