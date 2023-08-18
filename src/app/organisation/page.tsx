import { redirect } from "next/navigation";
import { Header } from "../(global)";
import { Table } from "./components";
import { getOrganisedEvents, getSession, isUserOrganiser } from "../(queries)";

const Organisation = async () => {
  const session = await getSession();
  const isOrganiser = await isUserOrganiser();
  const organisedEvents: DBEvent[] | null = isOrganiser
    ? await getOrganisedEvents()
    : null;

  if (!session) {
    redirect("/");
  }

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
        <Table events={organisedEvents}/>
      </div>
    </div>
  );
};

export default Organisation;
