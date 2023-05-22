import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { BsPersonFillGear } from "react-icons/bs"
import { IoIosWoman } from "react-icons/io"
import { AiFillStar } from "react-icons/ai"
import { createElement } from "react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  icon: IconType;
  exclamation?: ReactNode;

}

function Card ({ title, children, exclamation, icon }: CardProps) {
  return (
    <div className="bg-gradient-to-tl from-transparent to-pallete-gradient-top h-[472px] text-xs flex max-w-xs flex-col gap-2 rounded-md border-pallete-primary-light border-2 p-4 shadow-md">
      <div className="flex flex-col pt-6 items-center gap-4">
        <span className="h-[76px] w-[76px] rounded-full border-2 border-white flex justify-center items-center">{createElement(icon, { size: 40, color: "#05E1FE", fill: "#05E1FE" })}</span>
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
    <section className="mx-auto mb-48 max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-16">
      <div className="flex flex-col gap-11 items-center lg:items-start">
        <img src={'/static/img/greenelegantdots.svg'} className="hidden lg:block absolute  left-[-230px] transform scale-x-[-1] z-[0] w-[939px] h-[719px] right-[0px] mix-blend-difference" alt="Elegant Dots" />
        <img src={'/static/img/connectingRight.svg'} className="absolute lg:block right-[0px] w-[466px] sm:hidden lg:w-[538px] lg:h-[750px] mix-blend-difference" alt="Elegant Dots" />
      </div>
      <Heading className="flex border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
        {t("home.titles.curiosity")}
      </Heading>
      <div className="flex flex-col items-center justify-around gap-6 lg:flex-row lg:items-start">
        <Card
          title={t("home.titles.mmib")}
          icon={IoIosWoman}
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
          icon={AiFillStar}
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
          icon={BsPersonFillGear}
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
