const Card = (props: DBEvent) => {
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between column event m-2 p-6 event">
      <div>
        <h2 className="mt-2 subtitle is-5 is-size-6-mobile is-underlined has-text-white">
          {props.location}
        </h2>
        <h1 className="title is-4 is-size-5-mobile has-text-white">
          {props.name}
        </h1>
        <h2 className="mt-2 subtitle is-5 is-size-6-mobile has-text-white">
          {props.duration}
        </h2>
      </div>
    </div>
  );
};

export default Card;
