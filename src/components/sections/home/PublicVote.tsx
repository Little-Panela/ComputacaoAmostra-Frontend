/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CardTrophy from "../../../../public/static/img/trophy icon.png"
import TrophyL from "../../../../public/static/img/trophy left.png"
import TrophyR from "../../../../public/static/img/trophy right.png"

import TrophyLAlt from "../../../../public/static/img/trophy left lg.png"
import TrophyRAlt from "../../../../public/static/img/trophy right lg.png"

import Folhas from "../../../../public/static/img/coconutstree.png"
import FolhasR from "../../../../public/static/img/video-right-tree.png"
import { ReactNode, useState } from "react";
import { Heading } from "../../elements/Heading";
import { Button } from "../../elements/Button";
import { SwitchYear } from "../../modules/SwitchYear";
import { Text } from "../../elements/Text";
import { ModalProject } from "../../modules/ModalProject";

const Zenith = {
  title: "t('winners.ecomp.firstPlace.title')",
  description: "t('winners.ecomp.firstPlace.description')",
  isZenith: true,
  team: [
    "Gabriel Pinheiro Marcelino de Oliveira",
    "Matheus Tsuchiya Dourado",
    "Marco Antonio Gomes Pierozan",
    "Renan Andrew Oliveira Canuto",
    "Rian Ernesto Leão da Silva",
  ],
  youtubeId: "bJhPNFamNwk"
}

const Minerva = {
  title: "t('winners.ecomp.firstPlace.title')",
  description: "t('winners.ecomp.firstPlace.description')",
  isZenith: false,
  team: [
    "Athos Andrade Silva de Araujo",
    "Fernanda Cordeiro Panzera",
    "Henrique Cabral Velloso da Silva",
    "Vinicius Eduardo Pereira Raiol",
    "Tiago Costa Harrop Medeiros"
  ],
  youtubeId: "f2Xu5guID0w"
}

const EcoRota = {
  title: "t('winners.ecomp.firstPlace.title')",
  description: "t('winners.ecomp.firstPlace.description')",
  isZenith: false,
  team: [
    "João Cardoso",
    "Marco Aurélio",
    "Fábio Neves",
    "João Guilherme",
    "Luiz André"
  ],
  youtubeId: "64g5r67363Y"
}

const EducaOnca = {
  title: "t('winners.ecomp.firstPlace.title')",
  description: "t('winners.ecomp.firstPlace.description')",
  isZenith: false,
  team: [
    "Giovanna Souto",
    "Marília Barbosa",
    "Rafaela Barros"
  ],
  youtubeId: "B-jJFzueha4"
}

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

  modalLabel: string,
  modalText?: string,
  modalDescription: string,
  youtubeID: string,
  isZenith?: boolean,
  team: Array<string>
}

function SectionLabel({ title, mainText }: LogoSectionProps) {
  return (
    <div className="w-full flex flex-col items-center lg:w-1/2">
      <div className="flex text-base text-pallete-primary justify-center items-center pb-10">{title}</div>
      <Heading size="xl" className="w-fit z-10 flex border-b-2 pb-4 border-b-pallete-primary text-center text-3xl md:text-4xl">
        CONCEIÇÃO FIÚZA DE MELO
      </Heading>
      <Image alt="folha" src={Folhas} className="absolute left-0 translate-y-56 w-14 md:w-36" />
      <Image alt="folha" src={FolhasR} className="absolute right-0 translate-y-56 w-14 md:w-36" />
      <Text className="flex text-center text-sm py-10 font-normal leading-8 lg:text-base">{mainText}</Text>
    </div>
  )
}

function WinnersCard({ name, description, btnLabel, modalLabel, modalDescription, youtubeID, isZenith, team }: WinnerCardProps) {
  const { t } = useTranslation("common");
  return (
    <div className="items-center bg-transparent h-[400px] w-80 text-xs flex flex-col gap-7 rounded-md border-pallete-primary-light border-2 shadow-md relative">
    <div className="h-1/3 w-full absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pallete-primary-xdark via-transparent to-transparent" />
    <div className="flex flex-col items-center p-4 h-full">
        <Image src={CardTrophy} alt="Imagem de um trofeu" width={120} height={120} />
        <div className="flex flex-row">
          <Heading className="text-base p-4 md:text-xl">{name}</Heading>
        </div>
        <div className="text-center h-full flex flex-col leading-7 text-xs items-center justify-between gap-8">
          <div className="opacity-50">
            {description}
          </div>
          <ModalProject
            name={modalLabel}
            nameForSlug={modalLabel}
            description={modalDescription}
            teamMembers={team}
            isWinner={true}
            isPublicVote={true}
            videoId={youtubeID}
            isZenith={isZenith}
            course={"ecomp"}
            trigger={
              <Button className="block w-fit rounded-2xl border-[1px] border-pallete-primary bg-transparent py-3 text-sm font-bold text-white">
                {btnLabel}
              </Button>
            }
          />
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
    <div className="h-full py-16 lg:py-20">
      <div className="px-10 lg:flex lg:items-center lg:justify-center">
        <Image src={TrophyL} alt="troféu" className="absolute left-0 lg:hidden" />
        <Image src={TrophyR} alt="troféu" className="absolute right-0 lg:hidden" />
        <Image src={TrophyLAlt} alt="troféu" className="absolute z-10 left-0 hidden lg:block" />
        <Image src={TrophyRAlt} alt="troféu" className="absolute z-10 right-0 hidden lg:block" />
        <SectionLabel title={t("publicVote.award")} mainText={t("publicVote.mainText")} />
      </div>
      <SwitchYear year={selectedYear} onYearChange={handleYearChange} />
      <div className="w-full px-10 flex flex-col items-center">
        {selectedYear === "2023" && (
          <div className="flex flex-col gap-y-10 pt-10 lg:flex-row lg:gap-x-36">
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <WinnersCard
                name={t("publicVote.engineeringWinner.2023.name")}
                description={t("publicVote.engineeringWinner.2023.description")}
                btnLabel={t("home.winners.details")}
                modalLabel={t('publicVote.engineeringWinner.2023.name')}
                modalDescription={t('publicVote.modal.engineeringWinner.2023.description')}
                youtubeID={Minerva.youtubeId}
                isZenith={Minerva.isZenith}
                team={Minerva.team}
              />
            </div>
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <WinnersCard
                name={t("publicVote.scienceWinner.2023.name")}
                description={t("publicVote.scienceWinner.2023.description")}
                btnLabel={t("home.winners.details")}
                modalLabel={t('publicVote.scienceWinner.2023.name')}
                modalDescription={t('publicVote.modal.scienceWinner.2023.description')}
                youtubeID={EcoRota.youtubeId}
                isZenith={EcoRota.isZenith}
                team={EcoRota.team}
              />
            </div>
          </div>
        )}
        {selectedYear === "2022" && (
          <div className="flex flex-col gap-y-10 pt-10 lg:flex-row lg:gap-x-36">
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <WinnersCard
                name={t("publicVote.engineeringWinner.2022.name")}
                description={t("publicVote.engineeringWinner.2022.description")}
                btnLabel={t("home.winners.details")}
                modalLabel={t('publicVote.engineeringWinner.2022.name')}
                modalDescription={t('winners.ecomp.firstPlace.description')}
                youtubeID={Zenith.youtubeId}
                isZenith={Zenith.isZenith}
                team={Zenith.team}
              />
            </div>
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <WinnersCard
                name={t("publicVote.scienceWinner.2022.name")}
                description={t("publicVote.scienceWinner.2022.description")}
                btnLabel={t("home.winners.details")}
                modalLabel={t('publicVote.scienceWinner.2022.name')}
                modalDescription={t('publicVote.scienceWinner.2022.description')}
                youtubeID={EducaOnca.youtubeId}
                isZenith={EducaOnca.isZenith}
                team={EducaOnca.team}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
