import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, height: 0 }}
          className={
            (fn(spartan.className),
            "absolute inset-x-0  z-10 my-6 bg-mainBg md:hidden")
          }
        >
          {links.map((link, index) => (
            <motion.li
              initial={{ translateX: "100%" }}
              animate={{ translateX: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                ease: [0.06, 0.9, 1, 0.98],
                duration: 0.5,
                delay: (index * 0.2 * 8 * 5 + 0.5) / 100,
              }}
              key={link.name}
              onClick={toggle}
              className="px-6 transition hover:bg-slate-50/5"
            >
              <MobileNavLink href={link.href} color={link.color}>
                {link.name}
              </MobileNavLink>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
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
