import Link from "next/link";
import { useRouter } from "next/router";
import { fn } from "../../utils";
import { tabs } from "./tabs";

type DesktopTabsProps = {
  planetName: string;
};

const bgColors = {
  mercury: "bg-activeTab",
  venus: "bg-venus",
  earth: "bg-earth",
  mars: "bg-mars",
  jupiter: "bg-jupiter",
  saturn: "bg-saturn",
  uranus: "bg-uranus",
  neptune: "bg-neptune",
};

export const DesktopTabs = ({ planetName }: DesktopTabsProps) => {
  const router = useRouter();
  const { tab: tabParams = "overview" } = router.query;
  const bgColor = bgColors[planetName.toLowerCase() as keyof typeof bgColors];

  return (
    <nav className="hidden w-full min-w-[18rem] flex-[2] flex-col gap-4 md:flex">
      {tabs.map((tab, index) => (
        <Link
          key={tab.name}
          href={`/planet/${planetName.toLowerCase()}/?tab=${
            tab.key ? tab.key : tab.name
          }`}
          className={fn(
            "flex items-center gap-5 border border-silver px-5 py-2 font-bold tracking-wider lg:py-3",
            tabParams === (tab.key ? tab.key : tab.name) &&
              `border-opacity-0 ${bgColor}`
          )}
        >
          <span
            className={fn(
              "text-silver",
              tabParams === (tab.key ? tab.key : tab.name) && "text-white"
            )}
          >
            0{index + 1}
          </span>
          <span className="text-sm uppercase text-white">{tab.name}</span>
        </Link>
      ))}
    </nav>
  );
};
