import React from 'react'
import { Navbar, checkSession } from '.';

const NavbarServer = async () => {
 let session = await checkSession();

  return (
    <Navbar session={session}/>
  )
}

export default NavbarServer