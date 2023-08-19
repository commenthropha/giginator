"use client";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const cancelEvent = async (eventID: number) => {
  // Initialise Supabase client
  const supabase: SupabaseClient = createClientComponentClient();

  // Remove the event data from the database
  const { error } = await supabase.from("events").delete().match({
    id: eventID,
  });
};

const testAccountAction = () => {
  // Retrieve the main text element from the DOM
  const element = document.getElementById("text");

  // Remove a couple of divs containing text from the DOM
  document.getElementById("div1")?.remove();
  document.getElementById("div2")?.remove();

  //@ts-ignore
  // Update the text
  element.innerHTML =
    "You cannot delete events when logged in as the Organiser Test User.";
};

const CancelEventModal = ({
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
    <div id="cancel-event-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3
            id="confirmation"
            className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold"
          >
            Confirmation
          </h3>
          <p id="text">
            Are you sure that you want to cancel {` `}
            <span className="is-italic">{title}</span> ?
            <br />
          </p>
          <ul id="div1" className="mt-4">
            <li className="mx-2">
              - All allocated tickets for this event will be deleted
            </li>
            <li className="mx-2">
              - You will no longer be able to access this event
            </li>
          </ul>
          <p id="div2" className="has-text-weight-bold mt-4">
            Once you do this action, it cannot be undone.
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={async () => {
                  // So long as the userID is not that of the organiser test account
                  if (userID != "e214ecbf-0428-4ac9-83fe-833119fecf61") {
                    // Wait for the Supabase client to delete the event
                    await cancelEvent(eventID);

                    // Redirect to the organisation page and refresh to force a re-render
                    router.push("/organisation");
                    router.refresh();
                  }

                  // Otherwise
                  else {
                    // Update the DOM as dictated by the following function
                    testAccountAction();
                  }
                }}
              >
                {`Yes, I'm sure`}
              </button>
            </div>
            <div className="control">
              <button
                className="button is-ghost has-text-black modal-cancel"
                onClick={() =>
                  // Set the current modal as inactive
                  document
                    .getElementById("cancel-event-modal")
                    ?.classList.remove("is-active")
                }
              >
                No, go back!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelEventModal;
