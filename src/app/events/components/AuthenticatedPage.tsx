import { getOtherEvents, getUserEvents } from "../../(queries)";
import { Header } from "@/app/(global)";
import EventCard from "./EventCard";

const AuthenticatedPage = async () => {
  // Retrieve all user events from the database
  const userEvents: DBEvent[] | null = await getUserEvents();

  // Retrieve all non-user, non-organised events from the database
  const otherEvents: DBEvent[] | null = await getOtherEvents(4);
  return (
    <main>
      <Header title="Events" />
      <div className="my-6">
        {/* Render all user events as cards showing the event is booked. */}

        {userEvents?.map((event: DBEvent) => (
          <EventCard key={event.id} cardType="booked" event={event} />
        ))}

        {/* In the case of all other events, render a card as unavailable 
            if the event is at its max capacity. Othherwise, just render
            a card in its standard state */}

        {otherEvents?.map((event: DBEvent) =>
          event.capacity === event.tickets ? (
            <EventCard key={event.id} cardType="unavailable" event={event} />
          ) : (
            <EventCard key={event.id} cardType="standard" event={event} />
          )
        )}
      </div>
    </main>
  );
};

export default AuthenticatedPage;
