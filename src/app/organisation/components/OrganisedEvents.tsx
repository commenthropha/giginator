import { EventCard } from "@/app/(global)";

const OrganisedEvents = ({ events }: { events: DBEvent[] | null }) => {
  return events === null ? (
    <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
      {`You haven't organised any events yet.`}
    </p>
  ) : (
    events.map((event: DBEvent) => (
      <EventCard key={event.id} event={event} cardType={"standard"} />
    ))
  );
};

export default OrganisedEvents;
