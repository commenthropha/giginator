import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const initialiseSupabase = async() => {
    const cookieStore = cookies();
    const supabase: SupabaseClient = createServerComponentClient({ cookies: () => cookieStore });

    return supabase;
};

export default initialiseSupabase;
