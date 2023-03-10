import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ParsedUrlQuery } from "querystring";
import { antonio, spartan } from "..";
import { PlanetsData } from "../../../data";
import { Header } from "../../components/Header";
import { IconSource } from "../../components/icons";
import { DesktopTabs } from "../../components/planet/DesktopTabs";
import { MobileTabs } from "../../components/planet/MobileTabs";
import { PlanetImage } from "../../components/planet/PlanetImage";
import { fn } from "../../utils";

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
      <MobileTabs planetName={planet.name} />
      <main className={fn("container mx-auto", spartan.className)}>
        <div className="lg:flex lg:items-center lg:justify-center lg:gap-24">
          <PlanetImage
            src={imageSrc}
            planetImage={planet.images.planet}
            planetName={planet.name}
          />
          <div className="px-6 text-center md:flex md:items-center md:gap-12 md:text-left lg:ml-auto lg:max-w-md lg:flex-col lg:items-start">
            <div className="flex-[3]">
              <h2
                className={fn(
                  "text-4xl font-bold uppercase text-white md:text-5xl lg:text-7xl",
                  antonio.className
                )}
              >
                {planet.name}
              </h2>
              <p
                className={fn(
                  "mt-4 text-sm text-slate-300 md:mt-8 md:max-w-md lg:text-base",
                  spartan.className
                )}
              >
                {currentTabPlanet.content}
              </p>
              <span className="mt-8 flex items-center justify-center text-sm capitalize text-silver md:justify-start lg:text-base">
                source :{" "}
                <Link
                  href={currentTabPlanet.source}
                  target="_blank"
                  className="ml-1 flex items-center gap-1 font-bold  underline transition hover:opacity-75"
                >
                  wikipedia <IconSource />
                </Link>
              </span>
            </div>
            <DesktopTabs planetName={planet.name} />
          </div>
        </div>
        <ul className="my-7 flex flex-col gap-2 px-6 pb-6 md:flex-row md:justify-evenly lg:pb-0">
          {stats.map((stat) => (
            <li
              key={stat.key}
              className="flex flex-1 items-center justify-between border border-silver px-6 py-4 md:flex-col md:items-start md:gap-y-4"
            >
              <span
                className={fn(
                  "flex-shrink-0 text-[0.6rem] font-bold uppercase tracking-widest text-silver md:text-xs",
                  spartan.className
                )}
              >
                {stat.name}
              </span>
              <span
                className={fn(
                  "flex-shrink-0 text-xl font-semibold uppercase text-white md:text-2xl lg:text-3xl xl:text-4xl",
                  antonio.className
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
