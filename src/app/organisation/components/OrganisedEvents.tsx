import { EventCard } from "@/app/(global)";

/*
 * Displays all organised events as event card components
 */
const OrganisedEvents = ({ 
  events  // Events organised by the user to be displayed
}: { 
  events: DBEvent[] 
}) => {
  // If there are no events
  return events.length == 0 ? (
    <p className="mx-6 px-1 is-size-5 is-size-6-mobile">
      {`You haven't organised any events yet.`}
    </p>
  ) : (
    // Otherwise display the events as Event Cards
    events.map((event: DBEvent) => (
      <EventCard key={event.id} event={event} cardType={"standard"} />
    ))
  );
};

export default OrganisedEvents;
