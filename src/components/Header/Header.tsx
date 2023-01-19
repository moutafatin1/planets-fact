import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { antonio, spartan } from "../../pages";
import { fn } from "../../utils";
import { IconChevron } from "../icons";
import { ButtonMenu } from "./ButtonMenu";

const links = [
  {
    name: "mercury",
    href: "/planet/mercury",
    color: "bg-mercury",
  },
  {
    name: "venus",
    href: "/planet/venus",
    color: "bg-venus",
  },
  {
    name: "earth",
    href: "/planet/earth",
    color: "bg-earth",
  },
  {
    name: "mars",
    href: "/planet/mars",
    color: "bg-mars",
  },
  {
    name: "jupiter",
    href: "/planet/jupiter",
    color: "bg-jupiter",
  },
  {
    name: "saturn",
    href: "/planet/saturn",
    color: "bg-saturn",
  },
  {
    name: "uranus",
    href: "/planet/uranus",
    color: "bg-uranus",
  },
  {
    name: "neptune",
    href: "/planet/neptune",
    color: "bg-neptune",
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header className="">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <span
          className={fn(" text-3xl uppercase text-white", antonio.className)}
        >
          the planets
        </span>
        <ButtonMenu onClick={() => setIsOpen((old) => !old)} isOpen={isOpen} />
      </div>
      <hr className="border-divider/50" />
      {isOpen && (
        <ul className={(fn(spartan.className), "my-6")}>
          {links.map((link) => (
            <li key={link.name} className="px-6 transition hover:bg-slate-50/5">
              <MobileNavLink href={link.href} color={link.color}>
                {link.name}
              </MobileNavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

type MobileNavLinkProps = {
  children: ReactNode;
  href: string;
  color: string;
};

const MobileNavLink = ({ children, href, color }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-between border-b border-divider/50 py-5 font-bold uppercase text-white "
    >
      <span className="flex items-center gap-6">
        <span className={fn("h-5 w-5 rounded-full", color)}></span>
        {children}
      </span>
      <IconChevron />
    </Link>
  );
};
