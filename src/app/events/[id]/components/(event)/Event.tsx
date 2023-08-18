"use client";

import CancelTicketModal from "./BookTicketModal";
import Column from "../Column";
import BookTicketModal from "./BookTicketModal";

const Event = ({ event }: { event: DBEvent }) => {
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
        <button className="button is-warning is-light" 
         onClick={() =>
          document
            .getElementById("book-ticket-modal")
            ?.classList.add("is-active")
        }>
          Book Ticket
        </button>
      </div>
      <BookTicketModal title= {event.name}/>
    </div>
  );
};

export default Event;
