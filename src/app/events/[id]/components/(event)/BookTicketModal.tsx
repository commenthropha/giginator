"use client";

const BookTicketModal = () => {
  return (
    <div id="book-ticket-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            Booking Confirmation
          </h3>
          <p>
            This is to confirm your ticket for
            <span className="is-italic">test</span>
            <br />
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={() => {}}
              >
                Book Ticket!
              </button>
            </div>
            <div className="control">
              <button
                className="button is-ghost has-text-black modal-cancel"
                onClick={() =>
                  document
                    .getElementById("cancel-ticket-modal")
                    ?.classList.remove("is-active")
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketModal;
