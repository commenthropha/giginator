import React from "react";

const UserEvent = ({event}: {event: DBEvent}) => {
  return (
    <div id="information" className="m-6">
      <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold">
        Event Information
      </h2>
      <div className="columns is-desktop">
        <div className="column">
          <h3 className="purple subtitle is-3 is-size-4-mobile mx-6">
            <span className="has-text-weight-semibold">Event Location:</span>
            <br />
            {event.location}
          </h3>
        </div>
        <div className="column">
          <h3 className="purple subtitle is-3 is-size-4-mobile mx-6">
            <span className="has-text-weight-semibold">Event Duration:</span>
            <br />
            {event.duration}
          </h3>
        </div>
        <div className="column">
          <h3 className="purple subtitle is-3 is-size-4-mobile mx-6">
            <span className="has-text-weight-semibold">Date & Time:</span>
            <br />
            {event.date} - {event.time}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserEvent;
