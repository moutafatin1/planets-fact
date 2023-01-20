import Link from "next/link";
import { useState } from "react";
import { antonio } from "../../pages";
import { fn } from "../../utils";
import { ButtonMenu } from "./ButtonMenu";
import { links } from "./links";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="">
      <div className="mx-auto flex items-center justify-between px-6 py-4 md:flex-col">
        <span
          className={fn(" text-3xl uppercase text-white", antonio.className)}
        >
          the planets
        </span>
        <ButtonMenu
          onClick={() => setIsOpen((old) => !old)}
          isOpen={isOpen}
          className="md:hidden"
        />
        <nav className="mt-10 mb-6 hidden items-center gap-8 text-sm font-bold uppercase text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={fn("transition duration-200", link.desktopStyle)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="border-divider/50" />
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};
