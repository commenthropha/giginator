"use client";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const cancelEvent = async (eventID: number) => {
  // Initialise Supabase client
  const supabase: SupabaseClient = createClientComponentClient();

  const { error } = await supabase.from("events").delete().match({
    id: eventID,
  });
};

const CancelEventModal = ({ title, userID, eventID }: { title: string, userID: string, eventID: number }) => {
  const router = useRouter();

  return (
    <div id="cancel-event-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 id = "confirmation" className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            Confirmation
          </h3>
          <p id = "text">
            Are you sure that you want to cancel {` `}
            <span className="is-italic">{title}</span> ?
            <br />
          </p>
          <ul id = "div1" className="mt-4">
            <li className="mx-2">
              - All allocated tickets for this event will be deleted
            </li>
            <li className="mx-2">
              - You will no longer be able to access this event
            </li>
          </ul>
          <p id = "div2" className="has-text-weight-bold mt-4">
            Once you do this action, it cannot be undone.
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={async() => {
                  if (userID != "e214ecbf-0428-4ac9-83fe-833119fecf61"){
                    await cancelEvent(eventID);
                    router.push("/organisation");
                    router.refresh();
                  } else {
                    for (let i = 1; i < 3; i++) {
                      let element = document.getElementById(`div${i}`);
                      element?.remove();
                    }
                    let element = document.getElementById("text");
                    //@ts-ignore
                    element.innerHTML = "You cannot delete events when logged in as the Organiser Test User.";
                    
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
