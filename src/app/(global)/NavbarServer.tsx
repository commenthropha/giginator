import React from 'react'
import { getSession } from "../[queries]"
import { Navbar } from '.';

const NavbarServer = async () => {
 let session = await getSession();

  return (
    <Navbar session={session}/>
  )
}

export default NavbarServer