"use client";

import { Session } from "@supabase/auth-helpers-nextjs";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import Image from "next/image";
import logo from "./logo.png";
import logoDark from "./logo-dark.png";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";

// Create a type Alias for each item in the Navbar
type NavbarItem = {
  // The text that each Navbar link should display
  title: string;

  // The path to redirect to when clicked
  path: string;
};

// Create a type Alias for elements both sides of the Navbar
type NavbarItems = {
  startItems: Array<NavbarItem>;
  endItems: Array<NavbarItem>;
};

const NavbarData = (
  session: Session | null,
  isOrganiser: boolean
): NavbarItems => {
  // Initialise variables for allocation later
  let startItems: Array<NavbarItem>, endItems: Array<NavbarItem>;

  // If the user is logged in, display these Navbar items
  if (session) {
    startItems = isOrganiser
      ? [
          { title: "Dashboard", path: "/dashboard" },
          { title: "Organisation", path: "/organisation" },
          { title: "Events", path: "/events" },
        ]
      : [
          { title: "Dashboard", path: "/dashboard" },
          { title: "Events", path: "/events" },
        ];

    endItems = [{ title: "Sign Out", path: "/sign-out" }];
  }

  // Otherwise, display these items to all public users
  else {
    startItems = [
      { title: "Home", path: "/" },
      { title: "Events", path: "/events" },
    ];

    endItems = [{ title: "Sign In", path: "/sign-in" }];
  }
  return { startItems, endItems };
};

const BurgerMenu = ({
  toggled, // Determines the current state of the menu
  items, // The items to be displayed in the menu
}: {
  toggled: boolean;
  items: NavbarItem[];
}) => (
  <>
    {toggled ? (
      <div className={styles.burgerMenu}>
        {items.map((item: NavbarItem) => (
          <Link
            key={item.title}
            href={item.path}
            className="has-text-weight-semibold has-text-white"
          >
            {item.title}
          </Link>
        ))}
      </div>
    ) : null}
  </>
);

const StartItems = ({ items }: { items: Array<NavbarItem> }) => {
  // Get the current pathname (e.g. /sign-in, /dashboard)
  const pathname = usePathname();

  // Determines the colour of the Navbar text depending on the page
  const textColor =
    pathname === "/sign-in" || pathname === "/sign-out"
      ? "has-text-black"
      : "has-text-white";
  return (
    <>
      {items.map((item: NavbarItem) => (
        <p className={`navbar-item`} key={item.title}>
          <Link href={item.path} className={`${textColor} ${styles.navItem}`}>
            {item.title}
          </Link>
        </p>
      ))}
    </>
  );
};

const EndItems = ({ items }: { items: Array<NavbarItem> }) => (
  <>
    {items.map((item: NavbarItem) => (
      <Link
        key={item.title}
        href={item.path}
        className="button is-warning has-text-black"
      >
        {item.title}
      </Link>
    ))}
  </>
);

const CalculateColors = (isOpen: boolean) => {
  // Initialise variables for allocation later
  let image, color, hamburger;

  // Get the current pathname (e.g. /sign-in, /dashboard)
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-out") {
    image = isOpen ? logo : logoDark;
    color = isOpen ? "has-background-purple" : "has-background-beige";
    hamburger = isOpen ? "white" : "black";
  } else {
    image = logo;
    color = isOpen ? "has-background-purple" : "gradient";
    hamburger = "white";
  }

  return { image, color, hamburger };
};

const Navbar = ({
  session, // Data relating to the current application session
  isOrganiser, //Boolean value used to check if the current user is an organiser
}: {
  session: Session | null;
  isOrganiser: boolean;
}) => {
  // Get the start items and end items based on if the user is signed in
  const data = NavbarData(session, isOrganiser);

  /* Initialises a useState hook with an initial value of false
     to indicate that the menu should be start off as closed */
  const [isOpen, setOpen] = useState(false);

  /* useEffect hook to facilitate closing the menu whenever the
     window is resized */
  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
  });

  /* useEffect hook to facilitate closing the menu whenever the
     window is scrolled */
  useEffect(() => {
    window.addEventListener("scroll", () => setOpen(false));
  });

  // Allocate these variables as the function return values
  const { image, color, hamburger } = CalculateColors(isOpen);

  return (
    <nav className={`navbar ${styles.position} ${color}`}>
      <BurgerMenu
        toggled={isOpen}
        items={data.startItems.concat(data.endItems)}
      />

      <div className="navbar-brand">
        <a className="navbar-item">
          <Image src={image} alt="Logo" width={35} height={35} />
        </a>
        <div className="navbar-burger">
          <Hamburger toggled={isOpen} toggle={setOpen} color={hamburger} />
        </div>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <StartItems items={data.startItems} />
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <EndItems items={data.endItems} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
