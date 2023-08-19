import React from "react";
import { getSession, isUserOrganiser } from "../(queries)";
import { NavbarClient } from ".";

/* Need this component to serve the Navbar,
 * since we require a parent component that
 * is a server component to use cookies properly
 */
const NavbarServer = async () => {
  const session = await getSession();
  const isOrganiser = (await isUserOrganiser()) ? true : false;

  return <NavbarClient session={session} isOrganiser={isOrganiser} />;
};

export default NavbarServer;
