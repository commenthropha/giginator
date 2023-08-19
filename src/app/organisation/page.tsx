import { redirect } from "next/navigation";
import { Header } from "../(global)";
import { Table, OrganisedEvents } from "./components";
import { getOrganisedEvents, getSession, isUserOrganiser } from "../(queries)";

const Organisation = async () => {
  // Retrieve session data
  const session = await getSession();

  // Check if a current user is an organiser
  const isOrganiser = await isUserOrganiser();

  // Only get the organised events if the current user is an organiser
  const organisedEvents: DBEvent[] | null = isOrganiser
    ? await getOrganisedEvents()
    : null;

  // If not currently logged in
  if (!session) {
    redirect("/");
  }

  // If the current user is not an organiser
  if (!isOrganiser) {
    redirect("/404");
  }

  return (
    <div>
      <Header title="Organisation" />
      <div className="overview">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Overview
        </h2>
        <Table events={organisedEvents ? organisedEvents : []} />
      </div>
      <div className="organisation mb-6">
        <h2 className="gradient-text title is-2 is-size-3-mobile has-text-weight-semibold m-6">
          Organised Events
        </h2>
        <OrganisedEvents events={organisedEvents ? organisedEvents : []} />
      </div>
    </div>
  );
};

export default Organisation;
