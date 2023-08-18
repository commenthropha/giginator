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

const CancelEventModal = ({ title, eventID }: { title: string, eventID: number }) => {
  const router = useRouter();

  return (
    <div id="cancel-event-modal" className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="box has-text-weight-semibold has-background-warning-light p-6 m-2 is-flex is-flex-direction-column">
          <h3 className="subtitle is-3 is-size-4-mobile has-text-danger has-text-weight-semibold">
            Confirmation
          </h3>
          <p>
            Are you sure that you want to cancel {` `}
            <span className="is-italic">{title}</span> ?
            <br />
          </p>
          <ul className="mt-4">
            <li className="mx-2">
              - All allocated tickets for this event will be deleted
            </li>
            <li className="mx-2">
              - You will no longer be able to access this event
            </li>
          </ul>
          <p className="has-text-weight-bold mt-4">
            Once you do this action, it cannot be undone.
          </p>
          <div className="mt-4 buttons is-centered">
            <div className="control">
              <button
                className=" button is-text has-text-danger modal-cancel"
                onClick={async() => {
                  await cancelEvent(eventID);
                  router.push("/organisation");
                  router.refresh();
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
