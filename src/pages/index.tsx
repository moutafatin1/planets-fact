import { Antonio, League_Spartan } from "@next/font/google";
import type { GetServerSideProps } from "next";
export const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Home = () => {
  return <></>;
};

export default Home;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({}) => {
  return {
    redirect: {
      destination: "/planet/mercury",
      permanent: false,
    },
  };
};
