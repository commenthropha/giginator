import { SupabaseClient } from "@supabase/supabase-js";
import { Header, EventCard } from "@/app/(global)";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const PublicPage = async () => {
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });
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
