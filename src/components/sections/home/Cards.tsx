import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";

interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="flex max-w-xs flex-col gap-2 rounded-md border p-4 shadow-md">
      <div className="flex flex-col items-center gap-1">
        <Image src="/static/icons/circles.svg" width={25} height={40} alt="circles" />
        <Heading className="text-base md:text-xl">{title}</Heading>
      </div>

      <Text size="sm" asChild className="text-lg">
        <p>
          {description}
        </p>
      </Text>
    </div>
  );
}

export function Cards() {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto mt-10 mb-10 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-around gap-6 lg:flex-row">
          <Card
            title={t("home.titles.curiosity")}
            description={t("home.curiosity.mmib")}
          />
          <Card
            title={t("home.titles.curiosity")}
            description={t("home.curiosity.compamostra")}
          />
          <Card
            title={t("home.titles.curiosity")}
            description={t("home.curiosity.sthem")}
          />
      </div>
    </section>
  );
}
