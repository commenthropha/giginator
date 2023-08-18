"use client";
import {
  SupabaseClient,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const cancelTicket = async (userID: string, eventID: number) => {
  // Initialise Supabase client
  const supabase: SupabaseClient = createClientComponentClient();

  const { error } = await supabase.from("event_profiles").delete().match({
    event_id: eventID,
    profile_id: userID,
  });
};

const CancelTicketModal = ({ title, userID, eventID }: { title: string, userID: string, eventID: number }) => {  
  const router = useRouter();
  
  return (
    <div id="cancel-ticket-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            Confirmation
          </h3>
          <p>
            Are you sure that you want to cancel your ticket for{` `}
            <span className="is-italic">{title}</span> ?
            <br />
          </p>
          <p className="has-text-weight-bold mt-2">
            Once you do this action, it cannot be undone.
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={async() => {
                  await cancelTicket(userID, eventID);
                  router.push("/dashboard");
                  router.refresh();
                  } 
                }
              >
                {`Yes, I'm sure`}
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
                No, go back!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelTicketModal;
