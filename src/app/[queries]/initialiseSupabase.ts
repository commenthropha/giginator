import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const initialiseSupabase = async() => {
    const supabase: SupabaseClient = createServerComponentClient({ cookies });

    return supabase;
};

export default initialiseSupabase;
