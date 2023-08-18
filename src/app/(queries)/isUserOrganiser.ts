import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { getSession } from ".";
import { cookies } from "next/headers";

const isUserOrganiser = async () => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve session data
  const session = await getSession();

  // Query the database and return the user organiser status
  const { data } = await supabase
    .from("profiles")
    .select("organiser")
    .eq("id", session?.user.id)
    .single();

  return (data?.organiser);
};

export default isUserOrganiser;
