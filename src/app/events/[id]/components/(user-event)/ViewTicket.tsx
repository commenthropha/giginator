"use client";

const ViewTicketModal = () => {
  return (
    <div id="view-ticket-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            View Your Ticket
          </h3>

          <div className="mt-4 buttons is-centered">
            <div className="control is-centered">
              <button
                className="button is-ghost has-text-black modal-cancel"
                onClick={() =>
                  document
                    .getElementById("view-ticket-modal")
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

export default ViewTicketModal;
