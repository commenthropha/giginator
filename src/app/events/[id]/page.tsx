import { Header } from "@/app/(global)";
import {
  getOrganisedEvents,
  getSession,
  getUserEvents,
  isUserOrganiser,
} from "@/app/(queries)";
import {
  SupabaseClient,
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import React from "react";
import { UserEvent, OrganisedEvent, Event } from "./components";
import { redirect } from "next/navigation";

const EventPage = async ({
  params: { id }, // Page parameters, where the ID is that of the event we want
}: {
  params: { id: string };
}) => {
  let isUserEvent: boolean,
    isOrganisedEvent: boolean = false;

  // Initialise Supabase client
  const cookieStore = cookies();
  const supabase: SupabaseClient = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Retrieve session data
  const session = await getSession();
  let userID: string;

  if (!session) {
    redirect("/sign-in");
  } else {
    userID = session.user.id;
  }

  // Check if a current user is an organiser
  const isOrganiser = await isUserOrganiser();

  const { data: event } = await supabase
    .from("events")
    .select()
    .eq("id", Number(id))
    .single();

  // Retrieve all user events from the database
  const userEvents: DBEvent[] | null = await getUserEvents();
  const userEventIDs: number[] = userEvents?.map((e: DBEvent) => e.id) || [];

  // Checks if the current event is an event booked by the user
  isUserEvent = userEventIDs.includes(Number(id));

  if (isOrganiser) {
    // Retrieve all events the user has organised from the database
    const organisedEvents: DBEvent[] | null = await getOrganisedEvents();
    const organisedEventIDs: number[] =
      organisedEvents?.map((e: DBEvent) => e.id) || [];

    // Checks if the current event is an event organised by the user
    isOrganisedEvent = organisedEventIDs.includes(Number(id));
  }

  return (
    <div>
      <Header title={event.name} />
      {isUserEvent ? (
        <UserEvent event={event} userID={userID} />
      ) : isOrganisedEvent ? (
        <OrganisedEvent event={event} userID={userID} />
      ) : (
        <Event event={event} userID={userID} />
      )}
    </div>
  );
};

export default EventPage;
