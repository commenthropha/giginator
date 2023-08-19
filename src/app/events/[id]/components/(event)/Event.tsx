"use client";

import Column from "../Column";
import BookTicketModal from "./BookTicket";

const Event = ({
  event, // The event being used to render the component data
  userID, // The ID of the user currently signed in
}: {
  event: DBEvent;
  userID: string;
}) => {
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
      </div>
      <div className="buttons m-6 are-medium">
        <button
          className="button is-warning is-light"
          onClick={() =>
            // Set the modal to book the ticket as active
            document
              .getElementById("book-ticket-modal")
              ?.classList.add("is-active")
          }
        >
          Book Ticket
        </button>
      </div>
      <BookTicketModal title={event.name} userID={userID} eventID={event.id} />
    </div>
  );
};

export default Event;
