import React from 'react'
import { getSession } from "../[queries]"
import { NavbarClient } from '.';

/* Need this component to serve the Navbar,
 * since we require a parent component that
 * is a server component to use cookies properly
 */
const NavbarServer = async () => {
 let session = await getSession();

  return (
    <NavbarClient session={session}/>
  )
}

export default NavbarServer