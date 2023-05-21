import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { FaUniversity } from "react-icons/fa"
import { CardProgram } from "../../modules/CardProgram";
import { Text } from "../../elements/Text";
import { Label } from "@headlessui/react/dist/components/label/label";
import type { ReactNode } from "react";
import { Children } from "react";

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  exclamation?: ReactNode;
}

function Card ({ title, children, exclamation }: CardProps) {
  return (
    <div className="bg-gradient-to-tl from-transparent to-pallete-gradient-top h-[472px] text-xs flex max-w-xs flex-col gap-2 rounded-md border-pallete-primary-light border-2 p-4 shadow-md">
      <div className="flex flex-col items-center gap-4">
        <span className="h-[76px] w-[76px] rounded-full border-2 pt-5 border-white flex justify-center items-center">
          <CardProgram icon={FaUniversity} />
        </span>
        <div className="flex flex-row">
          <Heading className="text-base md:text-xl">{title}</Heading>
          <Heading className="text-base text-pallete-primary-light md:text-xl">{exclamation}</Heading>
        </div>
      </div>
      {children}
    </div>
  );
}

export function Cards () {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto mb-10 mt-10 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
      <Heading className="flex border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
        {t("home.titles.curiosity")}
      </Heading>
      <div className="flex flex-col items-center justify-around gap-6 lg:flex-row lg:items-start">
        <Card
          title={t("home.titles.mmib")}
        >
          <p className="text-base text-justify md:text-left lg:text-jusify p-4">
            {t("home.curiosity.mmibDescription.description1")}
            <b>
              {t("home.curiosity.mmibDescription.mmibBolder")}
            </b>
            {t("home.curiosity.mmibDescription.mmib")}
          </p>
        </Card>
        <Card
          title={t("home.titles.comp")}
        >
          <p className="text-base text-justify md:text-left lg:text-jusify p-4">
            {t("home.curiosity.compamostraDescription.description1")}
            <b>
              {t("home.curiosity.compamostraDescription.compamostraBolder")}
            </b>
            {t("home.curiosity.compamostraDescription.description2")}
            <b>
              {t("home.curiosity.compamostraDescription.cesupaBolder")}
            </b>
            {t("home.curiosity.compamostraDescription.description3")}
            <b>
              {t("home.curiosity.compamostraDescription.ABSBolder")}
            </b>
            {t("home.curiosity.compamostraDescription.description4")}
            <b>
              {t("home.curiosity.compamostraDescription.googleBolder")}
            </b>
            {t("home.curiosity.compamostraDescription.description5")}
          </p>
        </Card>
        <Card
          title={t("home.titles.university")}
        >
          <p className="text-base text-justify md:text-left  lg:text-jusify p-4">
            {t("home.curiosity.cesupaSthem.description1")}
            <b>
              {t("home.curiosity.cesupaSthem.sthemBolder")}
            </b>
            {t("home.curiosity.cesupaSthem.description2")}
            <b>
              {t("home.curiosity.cesupaSthem.cesupaBolder")}
            </b>
            {t("home.curiosity.cesupaSthem.description3")}
          </p>
        </Card>
      </div>
    </section>
  );
}
