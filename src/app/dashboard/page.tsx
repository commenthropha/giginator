import { redirect } from "next/navigation";
import { Header } from "../[global]"
import { SupabaseClient } from "@supabase/supabase-js";
import { getSession, getUserEvents, initialiseSupabase } from "../[queries]";

const Dashboard = async () => {

  const session = await getSession();
  const userEvents : Event[] | null = await getUserEvents();

  if (!session) {
    redirect("/");
  }

  return (
    <Header title="Dashboard"/>
  )
}

export default Dashboard