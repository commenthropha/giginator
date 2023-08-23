"use client";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

/*
 * Query to be executed upon confirmation of the modal
 */
const bookTicket = async (userID: string, eventID: number) => {
  // Initialise Supabase client
  const supabase: SupabaseClient = createClientComponentClient();

  // Add the ticket data to the database
  const { error } = await supabase.from("event_profiles").insert({
    event_id: eventID,
    profile_id: userID,
  });
};

/*
 * Modal to confirm the user's booking of the event
 */
const BookTicketModal = ({
  title, // The name of the event currently being booked
  userID, // The ID of the user currently signed in
  eventID, // The ID of the event currently being booked
}: {
  title: string;
  userID: string;
  eventID: number;
}) => {
  const router = useRouter();

  return (
    <div id="book-ticket-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            Booking Confirmation
          </h3>
          <p>
            This is to confirm your ticket for{` `}
            <span className="is-italic">{title}</span>
            <br />
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={async () => {
                  // Wait for the Supabase client to book the ticket
                  await bookTicket(userID, eventID);

                  // Redirect to the dashboard and refresh to force a re-render
                  router.push("/dashboard");
                  router.refresh();
                }}
              >
                Book Ticket!
              </button>
            </div>
            <div className="control">
              <button
                className="button is-ghost has-text-black modal-cancel"
                onClick={() =>
                  // Set the current modal as inactive
                  document
                    .getElementById("book-ticket-modal")
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
