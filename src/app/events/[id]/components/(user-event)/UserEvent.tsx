"use client";

import CancelTicketModal from "./CancelTicket";
import ViewTicketModal from "./ViewTicket";
import Column from "../Column";

const UserEvent = ({ event }: { event: DBEvent }) => {
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
            content={`${event.duration} - ${event.time}`}
          />
        </div>
      </div>
      <div className="buttons m-6 are-medium">
        <button className="button is-warning is-light" 
         onClick={() =>
          document
            .getElementById("view-ticket-modal")
            ?.classList.add("is-active")
        }>
          View Ticket
        </button>
        <button
          className="button is-danger"
          onClick={() =>
            document
              .getElementById("cancel-ticket-modal")
              ?.classList.add("is-active")
          }
        >
          Cancel Ticket
        </button>
      </div>
      <ViewTicketModal />
      <CancelTicketModal title={event.name}/>
    </div>
  );
};

export default UserEvent;
