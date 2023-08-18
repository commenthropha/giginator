"use client";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const bookTicket = async (userID: string, eventID: number) => {
  // Initialise Supabase client
  const supabase: SupabaseClient = createClientComponentClient();

  const { error } = await supabase.from("event_profiles").insert({
    event_id: eventID,
    profile_id: userID,
  });
};

const BookTicketModal = ({
  title,
  userID,
  eventID,
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
                onClick={async() => {
                  await bookTicket(userID, eventID);
                  router.push("/dashboard");
                  router.refresh();
                  } 
                }
              >
                Book Ticket!
              </button>
            </div>
            <div className="control">
              <button
                className="button is-ghost has-text-black modal-cancel"
                onClick={() =>
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
