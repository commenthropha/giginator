import { redirect } from "next/navigation";
import { Header } from "../[global]";
import {
  getSession,
  getUserEvents,
  getOrganisedEvents,
  isUserOrganiser,
  getOtherEvents,
} from "../[queries]";
import Card from "../[global]/Card";

const Dashboard = async () => {
  const session = await getSession();
  const isOrganiser: boolean = await isUserOrganiser();

  const userEvents: DBEvent[] | null = await getUserEvents();
  const otherEvents: DBEvent[] | null = await getOtherEvents(4);
  const organisedEvents: DBEvent[] | null = await getOrganisedEvents();
  
  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <Header title="Dashboard" />

      {/* Organised Events */}

      {isOrganiser ? (
        <div id="organised-events">
          <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
            Organised Events
          </h2>
          {organisedEvents === null ? (
            <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
              You haven't organised any events yet.
            </p>
          ) : (
            <div className="columns m-4">
              {organisedEvents.map((event: DBEvent) => (
                <Card key={event.id} event = {event} text="View This Event" />
              ))}
            </div>
          )}
          <h1 className="title mt-5 is-3 is-size-4-mobile has-text-weight-semibold purple px-6">
            Go to the <a className="gradient-text">organiser panel</a>
          </h1>
        </div>
      ) : null}

      {/* User Events */}

      <div id="organised-events">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Your Events
        </h2>
        {userEvents === null ? (
          <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
            You haven't organised any events yet.
          </p>
        ) : (
          <div className="columns m-4">
            {userEvents.map((event: DBEvent) => (
              <Card key={event.id} event = {event} text="View This Event" />
            ))}
          </div>
        )}
      </div>

      {/* Upcoming Events that the user hasn't booked/isn't organising */}

      <div id="organised-events" className="mb-6">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Upcoming Events
        </h2>
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
            {otherEvents.map((event: DBEvent) => (
              <Card key={event.id} event = {event} text="View This Event" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
