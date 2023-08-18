import { Card } from "@/app/(global)";

const OtherEvents = ({
    isOrganiser,
    events,
  }: {
    isOrganiser: boolean;
    events: DBEvent[] | null;
  }) => {
  return (
    <div id="organised-events" className="mb-6">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Upcoming Events
        </h2>

        {/* If there are no such events that fufill the requirements, 
            let them know; otherwise return all the events that 
            they have organised as card components*/}

        {events === null ? (
          <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
            <p className="mx-5 px-3 is-size-4 is-size-5-mobile">
              {`There aren't any events that you haven't booked${
                isOrganiser ? ` or that you aren't organising.` : "."
              }`}
            </p>
          </p>
        ) : (
          <div className="is-desktop columns m-4">
            {events.map((event: DBEvent) =>
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
  )
}

export default OtherEvents