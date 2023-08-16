const Card = (event: DBEvent, text: string | null) => {
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
      <h2 className="mt-2 subtitle is-5 is-size-6-mobile has-text-white">
        {event.duration}
      </h2>
    </div>
  );
};

export default Card;
