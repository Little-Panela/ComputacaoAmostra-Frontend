import { type NextPage } from "next";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Default } from "../components/layouts/Default";
import { Header } from "../components/sections/home/Header";
import { Hero } from "../components/sections/home/Hero";
import { Cards } from "../components/sections/home/Cards";
import { About } from "../components/sections/home/About";
import { Winners } from "../components/sections/home/Winners";
import { Program } from "../components/sections/home/Program";
import {ZenithBanner} from '../components/sections/home/ZenithBanner'
import { Logos } from "../components/sections/home/Logos";
import { Video } from "../components/sections/home/Video";

const Home: NextPage = () => {
  return (
    <Default>
      <Header />
      <Program />
      <About />
      <Video />
      <ZenithBanner />
      <Cards />
      <Winners />
      <Logos />
    </Default>
  );
};

export default Home;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "pt",
      "en",
    ])),
  },
});
