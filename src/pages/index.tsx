import { Antonio, League_Spartan } from "@next/font/google";
import { Header } from "../components/Header";
export const antonio = Antonio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
});

const Home = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
