import { Card } from "@/app/(global)";
import Link from "next/link";

const OrganisedEvents = ({
  events, // Events organised by the user to be displayed
  isOrganiser, // Boolean value used to determine if the current user is an organiser
}: {
  events: DBEvent[];
  isOrganiser: boolean;
}) => {
  return (
    /* Inline ternary operator checks if the user is an organiser 
    to determine if this needs to be rendered at all. */

    isOrganiser ? (
      <div id="organised-events">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Organised Events
        </h2>

        {/* If there are no events that the user has organised, 
              let them know; otherwise return all the events that 
              they have organised as card components*/}

        {events.length == 0 ? (
          <p className="mx-6 px-1 is-size-4 is-size-5-mobile">
            {`You haven't organised any events yet.`}
          </p>
        ) : (
          <div className="columns is-desktop m-4">
            {events.map((event: DBEvent) => (
              <Card key={event.id} event={event} text={true} />
            ))}
          </div>
        )}
        <h1 className="title mt-6 is-3 is-size-4-mobile has-text-weight-semibold purple px-6">
          Go to the{" "}
          <Link href="/organisation" className="gradient-text">
            organiser panel
          </Link>
        </h1>
      </div>
    ) : null
  );
};

export default OrganisedEvents;
