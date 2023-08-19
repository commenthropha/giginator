import { getSession } from "../(queries)";
import { PublicPage, AuthenticatedPage } from "./components";

const Events = async () => {
  // Retrieve session data
  const session = await getSession();

  // If logged in, return the authenticated page
  // Otherwise, return the public page
  return session ? <AuthenticatedPage /> : <PublicPage />;
};

export default Events;
