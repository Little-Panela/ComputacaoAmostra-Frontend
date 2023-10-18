/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CardTrophy from "../../../../public/static/img/trophy icon.png"
import { realization, partnership, sponsorship } from "../../../constants/companies";
import { ReactNode, createElement } from "react";
import { Heading } from "../../elements/Heading";
import { Button } from "../../elements/Button";
import { SwitchYear } from "../../modules/SwitchYear";

type SectionProps = {
  year: "2022" | "2023";
}

type LogoSectionProps = {
  title: string,
  children?: ReactNode
}

type WinnerCardProps = {
  name: string,
  description: string,
  btnLabel: string,
}

function Text({title}: LogoSectionProps) {
  return (
    <div className="w-full">
      <div className="flex text-base text-pallete-primary justify-center items-center">{title}</div>
      <Heading size="xl" className="border-b-2 pb-4 border-b-pallete-primary px-10 text-center text-3xl md:text-4xl">
      CONCEIÇÃO FIÚZA DE MELO
      </Heading>
    </div>
  )
}

function WinnersCard({ name, description, btnLabel }: WinnerCardProps) {
  return (
    <div className="items-center bg-transparent h-fit text-xs flex max-w-xs flex-col gap-7 rounded-md border-pallete-primary-light border-2 shadow-md">
      <div className="h-1/5 w-full absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pallete-primary-xdark via-transparent to-transparent" />
      <div className="flex flex-col items-center p-4">
        <Image src={CardTrophy} alt="Imagem de um trofeu" width={120} height={120} />
        <div className="flex flex-row">
          <Heading className="text-base p-4 md:text-xl">{name}</Heading>
        </div>
        <div className="text-center flex flex-col leading-7 text-xs items-center gap-8">
          <div className="opacity-50">
            {description}
          </div>
          <Button className="text-xs md:text-base">
            {btnLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function PublicVoteSection({ year }: SectionProps) {
  const { t } = useTranslation("common");

  return (
    <div className="h-full">
      <Text title={t("publicVote.award")} />
      <SwitchYear />
      <div className="w-full px-10">
        <div> active = 2022
          <WinnersCard name={t("publicVote.engineeringWinner.2022.name")} description={t("publicVote.engineeringWinner.2022.description")} btnLabel={t("home.winners.details")} />
          <WinnersCard name={t("publicVote.scienceWinner.2022.name")} description={t("publicVote.scienceWinner.2022.description")} btnLabel={t("home.winners.details")} />
        </div>
        <div> active = 2023
          <WinnersCard name={t("publicVote.engineeringWinner.2022.name")} description={t("publicVote.engineeringWinner.2022.description")} btnLabel={t("home.winners.details")} />
          <WinnersCard name={t("publicVote.scienceWinner.2022.name")} description={t("publicVote.scienceWinner.2022.description")} btnLabel={t("home.winners.details")} />
        </div>
      </div>
    </div>
  )
}
