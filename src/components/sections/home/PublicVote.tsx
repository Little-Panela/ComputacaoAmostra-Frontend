/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CardTrophy from "../../../../public/static/img/trophy icon.png"
import TrophyL from "../../../../public/static/img/trophy left.png"
import TrophyR from "../../../../public/static/img/trophy right.png"
import Folhas from "../../../../public/static/img/coconutstree.png"
import { ReactNode, useState } from "react";
import { Heading } from "../../elements/Heading";
import { Button } from "../../elements/Button";
import { SwitchYear } from "../../modules/SwitchYear";
import { Text } from "../../elements/Text";

type SectionProps = {
  year?: "2022" | "2023";
}

type LogoSectionProps = {
  title: string,
  mainText: string,
}

type WinnerCardProps = {
  name: string,
  description: string,
  btnLabel: string,
}

function SectionLabel({ title, mainText }: LogoSectionProps) {
  return (
    <div className="w-full">
      <div className="flex text-base text-pallete-primary justify-center items-center">{title}</div>
      <Heading size="xl" className="w-fit border-b-2 pb-4 border-b-pallete-primary text-center text-3xl md:text-4xl">
        CONCEIÇÃO FIÚZA DE MELO
      </Heading>
      <Image alt="folha" src={Folhas} className="absolute left-0" />
      <Text className="flex text-center text-xs py-10 font-normal leading-8">{mainText}</Text>
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

export function PublicVoteSection({ }: SectionProps) {
  const { t } = useTranslation("common");
  const [selectedYear, setSelectedYear] = useState<"2022" | "2023">("2023");

  const handleYearChange = (newYear: "2022" | "2023") => {
    setSelectedYear(newYear);
  };

  return (
    <div className="h-full">
      <div className="px-10 "> 
      <Image src={TrophyL} alt="troféu" className="absolute left-0"/>
      <Image src={TrophyR} alt="troféu" className="absolute right-0"/>
      <SectionLabel title={t("publicVote.award")} mainText={t("publicVote.mainText")}/>
      </div>
      <SwitchYear year={selectedYear} onYearChange={handleYearChange} />
      <div className="w-full px-10">
        {selectedYear === "2023" && (
          <div className="flex flex-col gap-y-10 pt-10">
            <div className="w-full flex justify-center gap-x-1">
              <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
            </div>
            <WinnersCard
              name={t("publicVote.engineeringWinner.2023.name")}
              description={t("publicVote.engineeringWinner.2023.description")}
              btnLabel={t("home.winners.details")}
            />
            <div className="w-full flex justify-center gap-x-1">
              <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
            </div>
            <WinnersCard
              name={t("publicVote.scienceWinner.2023.name")}
              description={t("publicVote.scienceWinner.2023.description")}
              btnLabel={t("home.winners.details")}
            />
          </div>
        )}
        {selectedYear === "2022" && (
          <div className="flex flex-col text-center gap-y-10 pt-10">
          <div className="w-full flex justify-center gap-x-1">
            <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
          </div>
          <WinnersCard
            name={t("publicVote.engineeringWinner.2022.name")}
            description={t("publicVote.engineeringWinner.2022.description")}
            btnLabel={t("home.winners.details")}
          />
          <div className="w-full flex justify-center gap-x-1">
            <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
          </div>
          <WinnersCard
            name={t("publicVote.scienceWinner.2022.name")}
            description={t("publicVote.scienceWinner.2022.description")}
            btnLabel={t("home.winners.details")}
          />
        </div>
        )}
      </div>
    </div>
  )
}
