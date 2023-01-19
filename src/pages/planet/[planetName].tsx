import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import { spartan } from "..";
import { PlanetsData } from "../../../data";
import { Header } from "../../components/Header";
import { IconSource } from "../../components/icons";
import { fn } from "../../utils";

const tabs = [
  {
    name: "overview",
  },
  {
    name: "structure",
  },
  {
    name: "surface",
    key: "geology",
  },
];
const stats = [
  {
    key: "rotation",
    name: "rotation time",
  },
  {
    key: "revolution",
    name: "revolution time",
  },
  {
    key: "radius",
    name: "radius",
  },
  {
    key: "temperature",
    name: "average temp.",
  },
];

const PlantDetailsPage = ({
  planet,
}: {
  planet: (typeof PlanetsData)[number];
}) => {
  const router = useRouter();
  const { tab: tabParams = "overview" } = router.query;

  const currentTabPlanet =
    planet[tabParams as "overview" | "structure" | "geology"];
  const imageSrc =
    planet.images[
      tabParams === "overview"
        ? "planet"
        : tabParams === "structure"
        ? "internal"
        : "geology"
    ];
  return (
    <>
      <Header />
      <nav
        className={fn(
          "flex items-center justify-between border-b  border-divider/50 p-6 text-xs font-bold uppercase text-silver",
          spartan.className
        )}
      >
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={`/planet/${planet.name.toLowerCase()}/?tab=${
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
      <main>
        <Image
          src={imageSrc}
          alt={planet.name}
          width={120}
          height={120}
          className="mx-auto my-24"
        />
        <div className="px-6 text-center">
          <h2 className="text-4xl font-bold uppercase text-white">
            {planet.name}
          </h2>
          <p className={fn("mt-4 text-sm text-slate-300", spartan.className)}>
            {currentTabPlanet.content}
          </p>
          <span className="mt-8 flex items-center justify-center text-sm capitalize text-silver">
            source :{" "}
            <Link
              href={currentTabPlanet.source}
              target="_blank"
              className="ml-1 flex items-center gap-1 font-bold  underline transition hover:opacity-75"
            >
              wikipedia <IconSource />
            </Link>
          </span>
          <ul className="my-7 flex flex-col gap-2">
            {stats.map((stat) => (
              <li
                key={stat.key}
                className="flex items-center justify-between border border-silver px-6 py-4"
              >
                <span className="flex-shrink-0 text-[0.6rem] font-bold uppercase text-silver">
                  {stat.name}
                </span>
                <span
                  className={fn(
                    "flex-shrink-0 text-xl font-medium uppercase text-white",
                    spartan.className
                  )}
                >
                  {
                    planet[
                      stat.key as
                        | "temperature"
                        | "radius"
                        | "revolution"
                        | "rotation"
                    ]
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default PlantDetailsPage;

export const getStaticPaths: GetStaticPaths = ({}) => {
  const planets = PlanetsData;
  const paths = planets.map((p) => ({
    params: {
      planetName: p.name.toLowerCase(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  planetName: string;
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { planetName } = params as IParams;
  const planet = PlanetsData.find((p) => p.name.toLowerCase() === planetName);

  return {
    props: {
      planet,
    },
  };
};
