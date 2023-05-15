import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";

/* eslint-disable @next/next/no-img-element */
export function Hero() {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center py-10">
        <Heading size="sm" className="text-base md:text-4xl">
          {t("home.header.title")}
        </Heading>
        <Text size="sm" className="md:text-2xl">
          {t("home.header.description")}
        </Text>
      </div>
      <div className="flex flex-wrap justify-center md:py-6">
        <img
          src="/static/img/island.svg"
          alt="island picture"
          className="h-auto w-full max-w-xl"
        />
        <Text size="sm" className="max-w-xl md:text-2xl">
          {t("home.header.about")}
        </Text>
      </div>
    </section>
  );
}
