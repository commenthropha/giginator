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

type NavbarItem = {
  title: string;
  path: string;
};

type NavbarItems = {
  startItems: Array<NavbarItem>;
  endItems: Array<NavbarItem>;
};

const NavbarData = (session: Session | null): NavbarItems => {
  let startItems: Array<NavbarItem>, 
      endItems: Array<NavbarItem>;

  if (session) {
    startItems = [
      { title: "Dashboard", path: "/dashboard" },
      { title: "Events", path: "/events" },
    ];
  
    endItems = [
      { title: "Sign Out", path: "/sign-out" },
    ];
  } else {
    startItems = [
      { title: "Home", path: "/" },
      { title: "Events", path: "/events" },
    ];
  
    endItems = [
      { title: "Sign In", path: "/sign-in" },
    ];
  }
  return { startItems, endItems };
};

const BurgerMenu = ({
  toggled,
  items,
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
  const pathname = usePathname();
  const textColor =
    pathname === "/sign-in" || pathname === "/sign-out"
      ? "has-text-black"
      : "has-text-white";
  return (
    <>
      {items.map((item: NavbarItem) => (
        <p className={`navbar-item`} key={item.title} >
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
        className={`button ${/^(log out)/i.test(item.title) ? 'is-light' : 'is-warning'} has-text-black`}
      >
        {item.title}
      </Link>
    ))}
  </>
);

const CalculateColors = (isOpen: boolean) => {
  let image, color, hamburger;
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

type Props = {
  signedIn: boolean
}

const Navbar = ({
  session,
}: {
  session: Session | null;
}) => {
  const data = NavbarData(session);

  console.log(data.startItems);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
  });

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
