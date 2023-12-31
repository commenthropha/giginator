import { Card } from "@/app/(global)";

/*
 * Displays booked events as card components
 */
const UserEvents = ({
  events, // Events booked by the user to be displayed
}: {
  events: DBEvent[];
}) => {
  return (
    <div id="booked-events">
      <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
        Your Events
      </h2>

      {/* If there are no events that the user has booked, 
            let them know; otherwise return all the events that 
            they have organised as card components*/}

      {events.length == 0 ? (
        <p className="mx-6 px-1 is-size-4 is-size-5-mobile">
          {`You haven't booked any events yet.`}
        </p>
      ) : (
        <div className="is-desktop columns m-4">
          {events.map((event: DBEvent) => (
            <Card key={event.id} event={event} text={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserEvents;
