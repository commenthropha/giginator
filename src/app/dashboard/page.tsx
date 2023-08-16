import { redirect } from "next/navigation";
import { Header } from "../[global]";
import { SupabaseClient } from "@supabase/supabase-js";
import { getSession, getUserEvents, initialiseSupabase } from "../[queries]";
import Card from "../[global]/Card";

const Dashboard = async () => {
  const session = await getSession();
  const userEvents: DBEvent[] | null = await getUserEvents();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Header title="Dashboard" />
      {userEvents === null ? (
        <div>Nothing</div>
      ) : (
        <div className="columns m-4">
          {userEvents.map((event: DBEvent) => (
            <Card key={event.id} {...event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
