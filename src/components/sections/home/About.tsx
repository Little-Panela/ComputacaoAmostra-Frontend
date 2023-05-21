import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import { CardAbout } from "../../modules/CardAbout";
import { Heading } from "../../elements/Heading";
import { AiFillAccountBook } from 'react-icons/ai'
const Player = dynamic(() => import("../../elements/Player"), {
  ssr: false,
});

export function About() {
  const { t } = useTranslation("common");

  return (
    // <section className="bg-[url('/static/img/about-bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-10 sm:px-6 lg:px-8">
    //   <div className="mx-auto max-w-7xl">
    //     <Heading size="lg" className="pt-9 text-center text-white md:text-4xl">
    //       {t("home.titles.about")}
    //     </Heading>

    //     <div className="mx-auto my-6">
    //       <Player videoId="PuRcj4yvfso" />
    //     </div>

    //     <p className="text-xl text-white">{t("home.about")}</p>
    //   </div>
    // </section>
    <section className="bg-[url('/static/img/about-background.png')] bg-cover bg-center bg-no-repeat flex flex-col px-8 lg:px-12 xl:px-36 items-center lg:items-start gap-20">
      <Heading className="border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
        O que Buscamos?
      </Heading>
      <div className="flex flex-wrap justify-center gap-y-9 gap-x-10 lg:grid lg:grid-cols-2">
        <CardAbout icon={AiFillAccountBook}>
          Fornecer soluções tecnológicas e empreendedoras na região amazônica.
        </CardAbout>
        <CardAbout icon={AiFillAccountBook}>
          Inter-relacionamento entre alunos e empresas de tecnologia do mercado.
        </CardAbout>
        <CardAbout icon={AiFillAccountBook}>
          Fortalecer o ecossistema de inovação e networking.
        </CardAbout>
        <CardAbout icon={AiFillAccountBook}>
          Criar experiências imersivas em ilhas e comunidades para os alunos.
        </CardAbout>
      </div>
    </section>
  );
}
