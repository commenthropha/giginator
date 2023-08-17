import {
  getOtherEvents,
  getUserEvents,
  isUserOrganiser,
} from "../../[queries]";
import { Header } from "@/app/(global)";
import EventCard from "./EventCard";

const AuthenticatedPage = async () => {
  const isOrganiser = await isUserOrganiser();

  const userEvents: DBEvent[] | null = await getUserEvents();
  const otherEvents: DBEvent[] | null = await getOtherEvents(4);
  return (
    <main>
      <Header title="Events" />
      <div className="my-6">
        {userEvents?.map((event: DBEvent) => (
          <EventCard key={event.id} cardType="booked" event={event} />
        ))}
        {otherEvents?.map((event: DBEvent) =>
          event.capacity === event.tickets ? (
            <EventCard
              key={event.id}
              cardType="unavailable"
              event={event}
            />
          ) : (
            <EventCard
              key={event.id}
              cardType="standard"
              event={event}
            />
          )
        )}
      </div>
    </main>
  );
};

export default AuthenticatedPage;
