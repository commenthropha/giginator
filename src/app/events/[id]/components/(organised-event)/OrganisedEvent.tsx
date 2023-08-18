"use client";

import React from "react";
import Column from "../Column";
import CancelEventModal from "./CancelEvent";

const OrganisedEvent = ({ event, userID }: { event: DBEvent, userID: string }) => {
  return (
    <div>
      <div id="information" className="m-6">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold">
          Event Information
        </h2>
        <div className="columns is-desktop">
          <Column title={"Event Location"} content={event.location} />
          <Column title={"Event Duration"} content={event.duration} />
          <Column
            title={"Date & Time"}
            content={`${event.date} - ${event.time}`}
          />
        </div>
        <div className="columns is-desktop">
          <Column title={"Tickets"} content={`${event.tickets}`} />
          <Column title={"Capacity"} content={`${event.capacity}`} />
          <Column title={"Remaining Space"} content={`${event.capacity - event.tickets}`} />
        </div>
      </div>
      <div className="buttons m-6 are-medium">
        <button
          className="button is-danger"
          onClick={() =>
            document
              .getElementById("cancel-event-modal")
              ?.classList.add("is-active")
          }
        >
          Cancel Event
        </button>
      </div>
      <CancelEventModal title={event.name} userID = {userID} eventID = {event.id}/>
    </div>
  );
};

export default OrganisedEvent;
