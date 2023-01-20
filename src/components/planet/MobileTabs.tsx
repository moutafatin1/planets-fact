import Link from "next/link";
import { useRouter } from "next/router";
import { spartan } from "../../pages";
import { fn } from "../../utils";
import { tabs } from "./tabs";



type MobileTabsProps = {
  planetName: string;
};

export const MobileTabs = ({ planetName }: MobileTabsProps) => {
  const router = useRouter();
  const { tab: tabParams = "overview" } = router.query;

  return (
    <nav
      className={fn(
        "flex items-center justify-between border-b  border-divider/50 p-6 text-xs font-bold uppercase text-silver md:hidden",
        spartan.className
      )}
    >
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={`/planet/${planetName.toLowerCase()}/?tab=${
            tab.key ? tab.key : tab.name
          }`}
          className={fn(
            "relative ",
            tabParams === (tab.key ? tab.key : tab.name) &&
              "text-white after:absolute after:top-9 after:left-0 after:h-1 after:w-full after:bg-activeTab after:content-[''] "
          )}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
};
