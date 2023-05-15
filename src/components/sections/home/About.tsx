import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
const Player = dynamic(() => import("../../elements/Player"), {
  ssr: false,
});

export function About() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-[url('/static/img/about-bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Heading size="lg" className="pt-9 text-center text-white md:text-4xl">
          {t("home.titles.about")}
        </Heading>

        <div className="mx-auto my-6">
          <Player videoId="PuRcj4yvfso" />
        </div>

        <p className="text-xl text-white">{t("home.about")}</p>
      </div>
    </section>
  );
}
