import { redirect } from "next/navigation";
import { Header, Card } from "../(global)";
import {
  getSession,
  getUserEvents,
  getOrganisedEvents,
  isUserOrganiser,
  getOtherEvents,
} from "../(queries)";
import {OrganisedEvents, UserEvents} from "./components";

const Dashboard = async () => {
  // Retrieve session data
  const session = await getSession();

  // Check if a current user is an organiser
  const isOrganiser = (await isUserOrganiser()) ? true : false;

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
      <OrganisedEvents events={organisedEvents} isOrganiser={isOrganiser}/>     
      <UserEvents events = {userEvents} />

      

      {/* Upcoming Events that the user hasn't booked/isn't organising */}

      <div id="organised-events" className="mb-6">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Upcoming Events
        </h2>

        {/* If there are no such events that fufill the requirements, 
            let them know; otherwise return all the events that 
            they have organised as card components*/}

        {otherEvents === null ? (
          <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
            <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
              {`There aren't any events that you haven't booked${
                isOrganiser ? ` or that you aren't organising.` : "."
              }`}
            </p>
          </p>
        ) : (
          <div className="is-desktop columns m-4">
            {otherEvents.map((event: DBEvent) =>
              event.tickets != event.capacity ? (
                <Card key={event.id} event={event} text={true} />
              ) : null
            )}
          </div>
        )}
        <h1 className="title mt-5 is-3 is-size-4-mobile has-text-weight-semibold purple px-6">
          See all upcoming events <a className="gradient-text">here</a>
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
