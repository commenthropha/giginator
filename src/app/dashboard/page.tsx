import { redirect } from "next/navigation";
import { Header, Card } from "../(global)";
import {
  getSession,
  getUserEvents,
  getOrganisedEvents,
  isUserOrganiser,
  getOtherEvents,
} from "../[queries]";

const Dashboard = async () => {
  // Wait for the supabase client to initialise
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

  console.log(userEvents);

  // If not currently logged in
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Header title="Dashboard" />

      {/* Organised Events */}

      {/* Inline ternary operator checks if the user is an organiser 
          to determine if this needs to be rendered at all. */}

      {isOrganiser ? (
        <div id="organised-events">
          <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
            Organised Events
          </h2>

          {/* If there are no events that the user has organised, 
              let them know; otherwise return all the events that 
              they have organised as card components*/}

          {organisedEvents === null ? (
            <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
              {`You haven't organised any events yet.`}
            </p>
          ) : (
            <div className="columns m-4">
              {organisedEvents.map((event: DBEvent) => (
                <Card key={event.id} event={event} text={true} />
              ))}
            </div>
          )}
          <h1 className="title mt-5 is-3 is-size-4-mobile has-text-weight-semibold purple px-6">
            Go to the <a className="gradient-text">organiser panel</a>
          </h1>
        </div>
      ) : null}

      {/* User Events */}

      <div id="booked-events">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Your Events
        </h2>

        {/* If there are no events that the user has booked, 
            let them know; otherwise return all the events that 
            they have organised as card components*/}

        {userEvents === null ? (
          <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
            {`You haven't booked any events yet.`}
          </p>
        ) : (
          <div className="columns m-4">
            {userEvents.map((event: DBEvent) => (
              <Card key={event.id} event={event} text={true} />
            ))}
          </div>
        )}
      </div>

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
          <div className="columns m-4">
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
