import Image from "next/image";
import { fn } from "../../utils";

type PlanetImageProps = {
  src: string;
  planetName: string;
};

const sizes = {
  mercury: "h-32 w-32 md:h-48 md:w-48 lg:h-72 lg:w-72",
  venus: "h-36 w-36 md:h-64 md:w-64 lg:h-[25rem] lg:w-[25rem] lg:my-12",
  earth: "h-44 w-44 md:h-72 md:w-72 lg:h-[28rem] lg:w-[28rem] lg:my-12",
  mars: "h-32 h-32 md:h-56 md:w-56 lg:h-[21rem] lg:w-[21rem]",
  jupiter:
    "h-56 w-56 md:h-[23rem] md:w-[23rem] lg:h-[36rem] lg:w-[36rem] lg:my-12",
  saturn:
    "h-64 w-64 md:h-[25rem] md:w-[25rem] lg:h-[40rem] lg:w-[40rem] lg:my-0",
  uranus: "h-44 w-44 md:h-72 md:w-72 lg:h-[28rem] lg:w-[28rem] lg:my-12",
  neptune: "h-44 w-44 md:h-72 md:w-72 lg:h-[28rem] lg:w-[28rem] lg:my-12",
};

export const PlanetImage = ({ planetName, src }: PlanetImageProps) => {
  const size = sizes[planetName.toLowerCase() as keyof typeof sizes];
  return (
    <figure className={fn("relative mx-auto my-24 lg:mx-0 lg:ml-auto", size)}>
      <Image
        src={src}
        alt={planetName}
        fill
        className="absolute  object-contain"
      />
    </figure>
  );
};
