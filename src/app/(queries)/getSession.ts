import {
  SupabaseClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSession = async () => {
  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Call the Supabase auth client to check if there is a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};

export default getSession;