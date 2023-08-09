"use client";

import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import logo from "../logo.png"
import styles from "./styles/Navbar.module.css";

type NavbarItem = {
  title: string;
  path: string;
};

type NavbarItems = {
  startItems: Array<NavbarItem>;
  endItems: Array<NavbarItem>;
};

const NavbarData = (): NavbarItems => {
  const startItems: Array<NavbarItem> = [
    { title: "Home", path: "" },
    { title: "About", path: "" },
    { title: "Events", path: "" },
  ];

  const endItems: Array<NavbarItem> = [
    { title: "Sign Up", path: "" },
    { title: "Log In", path: "" },
  ];

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
          <a
            key={item.title}
            className="has-text-weight-semibold has-text-white"
          >
            {item.title}
          </a>
        ))}
      </div>
    ) : null}
  </>
);

const StartItems = ({ items }: { items: Array<NavbarItem> }) => (
  <>
    {items.map((item: NavbarItem) => (
      <a
        key={item.title}
        className="navbar-item has-text-white has-text-weight-semibold"
      >
        {item.title}
      </a>
    ))}
  </>
);

const EndItems = ({ items }: { items: Array<NavbarItem> }) => (
  <>
    {items.map((item: NavbarItem) =>
      /^log/i.test(item.title) ? (
        <a key={item.title} className="button is-light">
          {item.title}
        </a>
      ) : (
        <a key={item.title} className="button is-warning">
          <strong>{item.title}</strong>
        </a>
      )
    )}
  </>
);

const Navbar = () => {
  const data = NavbarData();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
  });

  return (
    <nav className={`navbar ${styles.position}`}>
      <BurgerMenu
        toggled={isOpen}
        items={data.startItems.concat(data.endItems)}
      />

      <div className="navbar-brand">
        <a className="navbar-item">
          <Image
            src={logo}
            alt="Logo"
          />
        </a>
        <div className="navbar-burger">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
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
