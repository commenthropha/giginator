import Link from "next/link";

const Card = ({ event, text }: {event: DBEvent, text: boolean}) => {
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between column event m-2 p-6 event">
      <div className="mb-6">
        <h2 className="mt-2 subtitle is-5 is-size-6-mobile is-underlined has-text-white">
          {event.location}
        </h2>
        <h1 className="title is-4 is-size-5-mobile has-text-white">
          {event.name}
        </h1>
      </div>
      <div>
        <h2 className="mt-2 subtitle is-size-4 is-size-5-mobile has-text-white">
          {event.duration}
        </h2>

        {/* If true, display the text;
            otherwise, don't display anthing. */}

        {text ? (
          <Link href = {`events/${event.id}`} className="is-size-5 has-text-weight-bold is-size-6-mobile mt-2 has-text-white">
            View This Event
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
