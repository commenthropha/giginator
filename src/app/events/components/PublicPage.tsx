import { SupabaseClient } from "@supabase/supabase-js";
import { Header, EventCard } from "@/app/(global)";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

/*
 * This is the page that will be displayed for a public user (not signed in)
 */
const PublicPage = async () => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve all event data in the database
  const { data: events } = await supabase.from("events").select();

  return (
    <main>
      <Header title="Events" />
      <div className="my-6">
        {events?.map((event: DBEvent) => (
          <EventCard key={event.id} cardType="standard" event={event} />
        ))}
      </div>
    </main>
  );
};

export default PublicPage;
