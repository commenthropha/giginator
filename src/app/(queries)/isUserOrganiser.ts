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
  return await supabase
    .from("profiles")
    .select("organiser")
    .eq("id", session?.user.id);
};

export default isUserOrganiser;
