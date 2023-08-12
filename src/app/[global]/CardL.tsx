type CardType = "standard" | "booked" | "unavailable";

type CardProps = {
  cardType: CardType;
  event: DBEvent;
}

const CardL = ({cardType, event}: CardProps) => {
  switch (cardType) {
    case "standard":
      return (
        <div className="has-background-warning-light box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile  is-underlined">
            {event.location}
          </h2>
          <h1 className="title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="subtitle is-5 is-size-6-mobile has-text-weight-medium has-text-white">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <p className="mt-6 subtitle is-5 is-size-6-mobile">View This Event</p>
        </div>
      );
    case "booked":
      return (
        <div className="has-background-purple has-text-white box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile has-text-weight-semibold has-text-warning">
            You have a ticket for this event
          </h2>
          <h2 className="subtitle is-5 is-size-6-mobile is-underlined">
            {event.location}
          </h2>
          <h1 className="title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="subtitle is-5 is-size-6-mobile has-text-weight-medium has-text-white">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <p className="mt-6 subtitle is-5 is-size-6-mobile">View This Event</p>
        </div>
      );
    case "unavailable":
      return (
        <div className="has-background-grey-light box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile has-text-weight-semibold has-text-warning">
            You have a ticket for this event
          </h2>
          <h2 className="subtitle is-5 is-size-6-mobile  is-underlined">
            {event.location}
          </h2>
          <h1 className="title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="subtitle is-5 is-size-6-mobile has-text-weight-medium has-text-white">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <p className="mt-6 subtitle is-5 is-size-6-mobile">No Tickets Remaining</p>
        </div>
      );
  }
};

export default CardL;
