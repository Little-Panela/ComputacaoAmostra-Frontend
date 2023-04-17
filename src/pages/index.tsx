import { type NextPage } from "next";
import { Header } from "../components/sections/home/Header";
import { Hero } from "../components/sections/home/Hero";
import { Cards } from "../components/sections/home/Cards";
import { About } from "../components/sections/home/About";
import { Winners } from "../components/sections/home/Winners";
import { Logos } from "../components/sections/home/Logos";
import { Default } from "../components/layouts/Default";

const Home: NextPage = () => {
  return (
    <Default>
      <Header />
      <Hero />
      <Cards />
      <About />
      <Winners />
      <Logos />
    </Default>
  );
};

export default Home;
