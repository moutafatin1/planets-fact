import { Antonio, League_Spartan } from "@next/font/google";
export const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  return <main></main>;
};

export default Home;
