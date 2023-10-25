import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { CardAbout } from "../../modules/CardAbout";
import { Heading } from "../../elements/Heading";
import { AiFillAccountBook, AiOutlineGlobal } from 'react-icons/ai'
import { GiIsland } from 'react-icons/gi'
import { MdOutlineSchool } from 'react-icons/md'
import { BsDisplay } from 'react-icons/bs'

const Player = dynamic(() => import("../../elements/Player"), {
  ssr: false,
});

export function About () {
  const { t } = useTranslation("common");

  return (
    <section id="about" className="bg-about-linear py-32 md:bg-about-linear-md bg-cover bg-center bg-no-repeat flex flex-col px-8 lg:px-12 xl:px-36 items-center lg:items-start gap-20">
      <Heading className="border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
        {t("home.about.about1")}
        <b className="text-pallete-primary">
          {t("home.about.about2")}
        </b>
      </Heading>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-10 lg:grid lg:grid-cols-2">
        <CardAbout icon={BsDisplay}>
          {t("home.about.objective1")}
        </CardAbout>
        <CardAbout icon={AiOutlineGlobal}>
          {t("home.about.objective2")}
        </CardAbout>
        <CardAbout icon={MdOutlineSchool}>
          {t("home.about.objective3")}
        </CardAbout>
        <CardAbout icon={GiIsland}>
          {t("home.about.objective4")}
        </CardAbout>
      </div>
    </section>
  );
}
