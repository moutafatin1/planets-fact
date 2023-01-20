import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { antonio } from "../../pages";
import { fn } from "../../utils";
import { ButtonMenu } from "./ButtonMenu";
import { links } from "./links";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setIsOpen((old) => !old);
  }

  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 md:flex-col lg:flex-row lg:py-0">
        <span
          className={fn(" text-3xl uppercase text-white", antonio.className)}
        >
          the planets
        </span>
        <ButtonMenu
          onClick={toggleMenu}
          isOpen={isOpen}
          className="md:hidden"
        />
        <nav className="hidden items-center gap-8  text-sm font-bold uppercase text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={fn(
                "border-t-2 border-transparent pt-10 pb-6 transition duration-200 lg:pt-6",
                link.desktopStyle,
                router.asPath === link.href && link.activeStyle
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <hr className="border-divider/50" />
      <MobileMenu isOpen={isOpen} toggle={toggleMenu} />
    </header>
  );
};
