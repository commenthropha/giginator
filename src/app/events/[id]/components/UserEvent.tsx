import { Column } from ".";

const UserEvent = ({event}: {event: DBEvent}) => {
  return (
    <div id="information" className="m-6">
      <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold">
        Event Information
      </h2>
      <div className="columns is-desktop">
        <Column title = {"Event Location"} content = {event.location} />
        <Column title = {"Event Duration"} content = {event.duration} />
        <Column title = {"Date & Time"} content = {`${event.duration} - ${event.time}`} />
      </div>
    </div>
  );
};

export default UserEvent;
