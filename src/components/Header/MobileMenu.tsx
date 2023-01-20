import Link from "next/link";
import type { ReactNode } from "react";
import { spartan } from "../../pages";
import { fn } from "../../utils";
import { IconChevron } from "../icons";
import { links } from "./links";

type MobileMenuProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const MobileMenu = ({ isOpen, toggle }: MobileMenuProps) => {
  if (!isOpen) return null;
  return (
    <ul
      className={
        (fn(spartan.className),
        "absolute inset-x-0  z-10 my-6 bg-mainBg md:hidden")
      }
    >
      {links.map((link) => (
        <li
          key={link.name}
          onClick={toggle}
          className="px-6 transition hover:bg-slate-50/5"
        >
          <MobileNavLink href={link.href} color={link.color}>
            {link.name}
          </MobileNavLink>
        </li>
      ))}
    </ul>
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
