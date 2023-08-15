import React from 'react'
import { Navbar, getSession } from '.';

const NavbarServer = async () => {
 let session = await getSession();

  return (
    <Navbar session={session}/>
  )
}

export default NavbarServer