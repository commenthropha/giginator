import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getSession } from ".";

const cancelTicket = async (id: number) => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve session data
  const session = await getSession();

  const { error } = await supabase.from("event_profiles").delete().match({
    event_id: id,
    profile_id: session?.user.id,
  });
};

export default cancelTicket;
