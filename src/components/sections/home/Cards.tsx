import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { FaUniversity } from "react-icons/fa"
import { CardProgram } from "../../modules/CardProgram";
import { Text } from "../../elements/Text";

interface CardProps {
  title: string;
  description: string;
}

function Card ({ title, description }: CardProps) {
  return (
    <div className="bg-gradient-to-tl from-black to-pallete-gradient-top h-auto flex max-w-xs flex-col gap-2 rounded-md border-pallete-primary-light border-2 p-4 shadow-md">
      <div className="flex flex-col items-center gap-4">
        <span className="h-[76px] w-[76px] rounded-full borde-2 pt-5 border-white flex justify-center items-center">
          <CardProgram icon={FaUniversity} />
        </span>
        <Heading className="text-base md:text-xl">{title}</Heading>
      </div>
      <Text size="sm" asChild className="aling-center text-lg text-center p-4">
        <p>{description}</p>
      </Text>
    </div>
  );
}

export function Cards () {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto mb-10 mt-10 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
      <Heading className="flex border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
        Curiosidades
      </Heading>
      <div className="flex flex-col items-center justify-around gap-6 lg:flex-row lg:items-start">
        <Card
          title={t("home.titles.mmib")}
          description={t("home.curiosity.mmib")}
        />
        <Card
          title={t("home.titles.university")}
          description={t("home.curiosity.sthem")}
        />
        <Card
          title={t("home.titles.compamostra")}
          description={t("home.curiosity.compamostra")}
        />
      </div>
    </section>
  );
}
