import { redirect } from "next/navigation";
import { Header, Card } from "../(global)";
import {
  getSession,
  getUserEvents,
  getOrganisedEvents,
  isUserOrganiser,
  getOtherEvents,
} from "../(queries)";
import { OrganisedEvents, UserEvents, OtherEvents } from "./components";

const Dashboard = async () => {
  // Retrieve session data
  const session = await getSession();

  // Check if a current user is an organiser
  const isOrganiser = await isUserOrganiser();

  // Retrieve all user events from the database
  const userEvents: DBEvent[] | null = await getUserEvents();

  // Retrieve all non-user, non-organised events from the database
  const otherEvents: DBEvent[] | null = await getOtherEvents(4);

  // Retrieve all events the user has organised from the database
  const organisedEvents: DBEvent[] | null = isOrganiser // Check is the user is an organiser first
    ? await getOrganisedEvents()
    : null;

  // If not currently logged in
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Header title="Dashboard" />
      <OrganisedEvents
        events={organisedEvents ? organisedEvents : []}
        isOrganiser={isOrganiser}
      />
      <UserEvents events={userEvents ? userEvents : []} />
      <OtherEvents
        events={otherEvents ? otherEvents : []}
        isOrganiser={isOrganiser}
      />
    </div>
  );
};

export default Dashboard;
