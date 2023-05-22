/* eslint-disable @next/next/no-img-element */

import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { Button } from "../../elements/Button";
import { UseTranslation, useTranslation } from "next-i18next";

export function Header() {
  const { t } = useTranslation("common")

  const scrollToProgram = () => {
    const program = document.getElementById("program");
    program?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-main-linear flex flex-col px-12 -mt-[160px] pt-[160px] justify-center items-center bg-cover bg-center bg-no-repeat h-screen pb-40">

      <div className="flex flex-col gap-4 items-center mb-16">
        <img src="/static/img/logo-amazon.png" alt="Logo Amazon Hacking" />
        <Heading className="text-center text-lg md:text-2xl">
          {t("home.header.date1").toUpperCase()}
          <b className="text-pallete-primary">
            {t("home.header.date2").toUpperCase()}
          </b>
          {t("home.header.date3").toUpperCase()}
          <b className="text-pallete-primary">
            {t("home.header.date4").toUpperCase()}
          </b>
        </Heading>
      </div>
      <Text className="mb-16 text-sm text-gray-300 text-center md:w-3/4 md:text-lg xl:w-3/5">
        {`"${t("home.header.description")}"`}
      </Text>
      <Button onClick={scrollToProgram}>
        {t("home.header.button")}
      </Button>
    </header>
  );
}
