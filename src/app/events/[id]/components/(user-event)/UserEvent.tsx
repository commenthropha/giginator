"use client";

import CancelTicketModal from "./CancelTicket";
import ViewTicketModal from "./ViewTicket";
import Column from "../Column";

/*
 * This is the page that will be displayed for an event booked by the user
 */
const UserEvent = ({
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
          Booking Information
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
            // Set the modal to view the ticket as active
            document
              .getElementById("view-ticket-modal")
              ?.classList.add("is-active")
          }
        >
          View Ticket
        </button>
        <button
          className="button is-danger"
          onClick={() =>
            // Set the modal to cancel the ticket as active
            document
              .getElementById("cancel-ticket-modal")
              ?.classList.add("is-active")
          }
        >
          Cancel Ticket
        </button>
      </div>
      <ViewTicketModal />
      <CancelTicketModal
        title={event.name}
        userID={userID}
        eventID={event.id}
      />
    </div>
  );
};

export default UserEvent;
