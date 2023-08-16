import { getSession } from "../[queries]";
import { PublicPage, AuthenticatedPage } from "./components";

const Events = async () => {
  const session = await getSession();

  return session ? <AuthenticatedPage /> : <PublicPage />;
};

export default Events;