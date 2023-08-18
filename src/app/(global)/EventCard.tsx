import Link from "next/link";

// Create a type alias for the different card variants
type CardType = "standard" | "booked" | "unavailable";

const EventCard = ({
  cardType,
  event,
}: {
  cardType: CardType;
  event: DBEvent;
}) => {
  // Evaluate the card type parameter
  switch (cardType) {
    // For the "standard" event card variant
    case "standard":
      return (
        <div className="has-background-warning-light box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile  is-underlined">
            {event.location}
          </h2>
          <h1 className="title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="subtitle is-5 is-size-6-mobile has-text-weight-medium">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <Link
            href={`events/${event.id}`}
            className="has-text-weight-semibold mt-6 subtitle is-5 is-size-6-mobile"
          >
            View This Event
          </Link>
        </div>
      );

    // For the "booked" event card variant
    case "booked":
      return (
        <div className="has-background-purple box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile has-text-weight-semibold has-text-warning">
            You Have A Ticket For This Event
          </h2>
          <h2 className="has-text-white subtitle is-5 is-size-6-mobile is-underlined">
            {event.location}
          </h2>
          <h1 className="has-text-white title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="has-text-white subtitle is-5 is-size-6-mobile has-text-weight-medium has-text-white">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="has-text-white mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <Link
            href={`events/${event.id}`}
            className="mt-6 subtitle is-5 has-text-weight-semibold is-size-6-mobile has-text-grey-lighter"
          >
            View This Event
          </Link>
        </div>
      );

    // For the "unavailable" event card variant
    case "unavailable":
      return (
        <div className="has-background-grey-light box mx-5 p-6">
          <h2 className="subtitle is-5 is-size-6-mobile is-underlined">
            {event.location}
          </h2>
          <h1 className="title is-4 is-size-5-mobile">
            {event.name} <br />
            <span className="subtitle is-5 is-size-6-mobile has-text-weight-medium has-text-grey-medium">
              {" "}
              {event.date} - {event.time}
            </span>
          </h1>
          <h2 className="mt-1 subtitle is-5 is-size-6-mobile">
            {event.duration}
          </h2>
          <p className="mt-6 subtitle is-5 has-text-weight-semibold is-size-6-mobile">
            This Event Is Booked Out
          </p>
        </div>
      );
  }
};

export default EventCard;
