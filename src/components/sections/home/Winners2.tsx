/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CardTrophy from "../../../../public/static/img/trophy icon.png"
import TrophyL from "../../../../public/static/img/trophy left.png"
import TrophyR from "../../../../public/static/img/trophy right.png"

import TrophyFrist from "../../../../public/static/img/frist-place-trophy.png"
import TrophySecond from "../../../../public/static/img/second-place-trophy.png"
import TrophyThird from "../../../../public/static/img/third-place-trophy.png"

import podium from "../../../../public/static/img/podium.png"
import wavesRight from "../../../../public/static/img/Wave BG Direita.png"
import wavesLeft from "../../../../public/static/img/Wave BG Esquerda.png"

import Folhas from "../../../../public/static/img/coconutstree.png"
import FolhasR from "../../../../public/static/img/video-right-tree.png"
import { ReactNode, useState } from "react";
import { Heading } from "../../elements/Heading";
import { Button } from "../../elements/Button";
import { SwitchYear } from "../../modules/SwitchYear";
import { Text } from "../../elements/Text";
import { ModalProject } from "../../modules/ModalProject";

type SectionProps = {
  year?: "2022" | "2023";
}

type LogoSectionProps = {
  title: string,
  label: string
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
  isZenith: boolean,
  position: number,
  team: Array<string>
}

function SectionLabel({ title, mainText, label }: LogoSectionProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex text-base text-pallete-primary justify-center items-center pb-10">{title}</div>
      <Heading size="xl" className="w-fit z-10 flex border-b-2 pb-4 border-b-pallete-primary text-center text-3xl md:text-4xl">
        COMPUTAÇÃO AMOSTRA
      </Heading>
      {/* <Image alt="elegant dots" src={wavesLeft} className="absolute left-0 translate-y-56 w-14 md:w-36" /> */}
      {/* <Image alt="elegant dots" src={wavesRight} className="absolute right-0 translate-y-56 w-14 md:w-36" /> */}
      <div className="flex flex-col items-center md:flex-row md:justify-center lg:px-16">
        <div className="flex flex-col py-10 items-center gap-y-7 md:items-start">
          <Text className="flex text-center md:text-left text-lg font-bold leading-6 lg:text-base">{label}</Text>
          <Text className="flex text-center md:text-left text-sm font-normal leading-6 lg:text-base">{mainText}</Text>
        </div>
        <Image alt="elegant dots" src={podium} className="w-[324px] md:w-[350px]" />
      </div>
    </div>
  )
}

function WinnersCard({ name, description, btnLabel, modalLabel, modalDescription, youtubeID, isZenith, team, position }: WinnerCardProps) {
  const positionTrophy = () => {
    switch (position) {
      case 1:
        return TrophyFrist
      case 2:
        return TrophySecond
      case 3:
        return TrophyThird
      default:
        return TrophyFrist;
    }
  }
  return (
    <div className="z-10 items-center bg-transparent h-[400px] shrink-0 w-80 text-xs flex flex-col gap-7 rounded-md border-pallete-primary-light border-2 shadow-md relative">
      <div className="h-1/3 w-full absolute bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pallete-primary-xdark via-transparent to-transparent" />
      <div className="flex flex-col w-[300px] items-center p-4 h-full">
        <Image src={positionTrophy()} alt="Imagem de um trofeu" width={120} height={120} />
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
            isZenith={isZenith}
            isPublicVote={true}
            videoId={youtubeID}
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

export function WinnerSection2({ }: SectionProps) {
  const { t } = useTranslation("common");
  const [selectedYear, setSelectedYear] = useState<"2022" | "2023">("2023");

  const handleYearChange = (newYear: "2022" | "2023") => {
    setSelectedYear(newYear);
  };

  const ecompWinners2022 = [
    {
      position: 1,
      title: t("winners-att.2022.ecomp.firstPlace.title"),
      description: t("winners-att.2022.ecomp.firstPlace.description"),
      modalDescription: t("winners-att.2022.ecomp.firstPlace.modalDescription"),
      isZenith: true,
      team: [
        "Gabriel Pinheiro Marcelino de Oliveira",
        "Matheus Tsuchiya Dourado",
        "Marco Antonio Gomes Pierozan",
        "Renan Andrew Oliveira Canuto",
        "Rian Ernesto Leão da Silva",
      ],
      youtubeId: "bJhPNFamNwk"
    },
    {
      position: 2,
      title: t("winners-att.2022.ecomp.secondPlace.title"),
      description: t("winners-att.2022.ecomp.secondPlace.description"),
      modalDescription: t("winners-att.2022.ecomp.secondPlace.modalDescription"),
      isZenith: false,
      team: [
        "João Pedro Brito",
        "Alexander Cardoso",
        "Leonardo Arero",
        "Nailton Sampaio",
      ],
      youtubeId: "XWMRPfiLbHM"
    },
    {
      position: 3,
      title: t("winners-att.2022.ecomp.thirdPlace.title"),
      description: t("winners-att.2022.ecomp.thirdPlace.description"),
      modalDescription: t("winners-att.2022.ecomp.thirdPlace.modalDescription"),
      isZenith: false,
      team: [
        "Lucas Gabriel Carvalho de Amorim",
        "Rômulo Di Córdova",
        "Fernando Otavio",
        "Antonio Bernardo",
      ],
      youtubeId: "7kFMQciPRcI"
    },
  ];
  const ecompWinners2023 = [
    {
      position: 1,
      title: t("winners-att.2023.ecomp.firstPlace.title"),
      description: t("winners-att.2023.ecomp.firstPlace.description"),
      modalDescription: t("winners-att.2023.ecomp.firstPlace.modalDescription"),
      isZenith: false,
      team: [
        "Lucas Gabriel Carvalho Amorim",
        "Ivanovich Alberto Moraes Santos",
        "Mateus Fadul Neves do Couto",
        "Rômulo di Córdova Conceição"
      ],
      youtubeId: t("winners-att.2023.ecomp.firstPlace.youtubeId"),
    },
    {
      position: 2,
      title: t("winners-att.2023.ecomp.secondPlace.title"),
      description: t("winners-att.2023.ecomp.secondPlace.description"),
      modalDescription: t("winners-att.2023.ecomp.secondPlace.modalDescription"),
      isZenith: false,
      team: [
        "Ernesto Bertoldo Brito Costa",
        "Diego Yuta Sato",
        "Caio Pereira Gillet Machado",
        "Gabriel Logan Calandrini De Azevedo Tsuchiya",
        "Geovany Miranda Vieira",
        "Murilo Baratella Guimarães"
      ],
      youtubeId: t("winners-att.2023.ecomp.secondPlace.youtubeId"),
    },
    {
      position: 3,
      title: t("winners-att.2023.ecomp.thirdPlace.title"),
      description: t("winners-att.2023.ecomp.thirdPlace.description"),
      modalDescription: t("winners-att.2023.ecomp.thirdPlace.modalDescription"),
      isZenith: false,
      team: [
        "João Victor Silva Kikuchi",
        "Lucas Miranda Leal",
        "Pedro Henrique Alves Luz"
      ],
      youtubeId: t("winners-att.2023.ecomp.thirdPlace.youtubeId"),
    },
  ];
  const bccWinners2022 = [
    {
      position: 1,
      title: t("winners-att.2022.bcc.firstPlace.title"),
      description: t("winners-att.2022.bcc.firstPlace.description"),
      modalDescription: t("winners-att.2022.bcc.firstPlace.modalDescription"),
      isZenith: false,
      team: [
        "Thiago Augusto Souza Silva",
        "Arthur Kenji Enomoto de Oliveira",
        "Amora Sofia da Paixão",
        "Igor Hiroshi Matsumoto",
        "Muriel Áquila Pantoja Silva",
      ],
      youtubeId: ""
    },
    {
      position: 2,
      title: t("winners-att.2022.bcc.secondPlace.title"),
      description: t("winners-att.2022.bcc.secondPlace.description"),
      modalDescription: t("winners-att.2022.bcc.secondPlace.modalDescription"),
      isZenith: false,
      team: [
        "Felipe Machado Dias Ramos",
        "Letícia Keuffer Cavalleiro de Macedo",
        "Pedro Benitah Sanchez de Melo",
        "Vitor Gurjão Sampaio Pombo",
        "Vítor Longhi Ramôa",
      ],
      youtubeId: "Rz6ecyAGyRw"
    },
    {
      position: 3,
      title: t("winners-att.2022.bcc.thirdPlace.title"),
      description: t("winners-att.2022.bcc.thirdPlace.description"),
      modalDescription: t("winners-att.2022.bcc.thirdPlace.modalDescription"),
      isZenith: false,
      team: [
        "Fabio Neves",
        "João Vitor Cardoso",
        "Marco Aurélio",
        "Newton Miranda",
        "João Guilherme Beltrão",
      ],
      youtubeId: "Q-fDlpqaWDA"
    },
  ];
  const bccWinners2023 = [
    {
      position: 1,
      title: t("winners-att.2023.bcc.firstPlace.title"),
      description: t("winners-att.2023.bcc.firstPlace.description"),
      modalDescription: t("winners-att.2023.bcc.firstPlace.modalDescription"),
      isZenith: false,
      team: [
        "Ryan Oliveira",
        "Letícia Malato",
        "Letícia Lima",
        "Vinícius Casanova",
        "Miguel Angelim",
      ],
      youtubeId: t("winners-att.2023.bcc.firstPlace.youtubeId")
    },
    {
      position: 2,
      title: t("winners-att.2023.bcc.secondPlace.title"),
      description: t("winners-att.2023.bcc.secondPlace.description"),
      modalDescription: t("winners-att.2023.bcc.secondPlace.modalDescription"),
      isZenith: false,
      team: [
        "Caio Johnston Soares",
        "Vinicius Rayol",
        "Luiz Felipe Pina",
        "Pedro Vitor Raiol",
        "Lucas Borges"
      ],
      youtubeId: t("winners-att.2023.bcc.secondPlace.youtubeId")
    },
    {
      position: 3,
      title: t("winners-att.2023.bcc.thirdPlace.title"),
      description: t("winners-att.2023.bcc.thirdPlace.description"),
      modalDescription: t("winners-att.2023.bcc.thirdPlace.modalDescription"),
      isZenith: false,
      team: [
        "Bruna Melido",
        "Isadora Lacerda",
        "Ícaro Macedo"
      ],
      youtubeId: t("winners-att.2023.bcc.thirdPlace.youtubeId")
    },
  ];

  return (
    <div className="h-full py-16 lg:py-20">
      <div className="px-10 lg:flex lg:w-full lg:items-center lg:justify-center lg:px-32">
        <Image src={TrophyL} alt="troféu" className="absolute left-0 lg:hidden" />
        <Image src={TrophyR} alt="troféu" className="absolute right-0 lg:hidden" />
        <SectionLabel title={t("publicVote.award")} mainText={t("winners-att.sectionHeader.mainText")} label={t("winners-att.sectionHeader.label")} />
      </div>
      <SwitchYear year={selectedYear} onYearChange={handleYearChange} />
      <div className="w-full px-10 flex flex-col items-center">
      <Image alt="elegant dots" src={wavesLeft} className="absolute left-0 w-[284px] md:w-[484px]" />
        {selectedYear === "2023" && (
          <div className="w-[100vw] flex flex-col gap-y-10 pt-10 lg:items-center lg:gap-x-36">
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <div className="flex overflow-x-scroll gap-x-5 lg:flex-row">
                {ecompWinners2023.map((winner, index) => (
                  <WinnersCard
                    key={index}
                    name={winner.title}
                    description={winner.description}
                    btnLabel={t("home.winners.details")}
                    modalLabel={winner.title}
                    modalDescription={winner.modalDescription}
                    youtubeID={winner.youtubeId}
                    isZenith={winner.isZenith}
                    team={winner.team}
                    position={winner.position}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <div className="flex overflow-x-scroll gap-x-5 lg:flex-row">
                {bccWinners2023.map((winner, index) => (
                  <WinnersCard
                    key={index}
                    name={winner.title}
                    description={winner.description}
                    btnLabel={t("home.winners.details")}
                    modalLabel={winner.title}
                    modalDescription={winner.modalDescription}
                    youtubeID={winner.youtubeId}
                    isZenith={winner.isZenith}
                    team={winner.team}
                    position={winner.position}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {selectedYear === "2022" && (
          <div className="w-[100vw] flex flex-col gap-y-10 pt-10 lg:items-center lg:gap-x-36">
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.engineering")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <div className="flex overflow-x-scroll gap-x-5 lg:flex-row">
                {ecompWinners2022.map((winner, index) => (
                  <WinnersCard
                    key={index}
                    name={winner.title}
                    description={winner.description}
                    btnLabel={t("home.winners.details")}
                    modalLabel={winner.title}
                    modalDescription={winner.modalDescription}
                    youtubeID={winner.youtubeId}
                    isZenith={winner.isZenith}
                    team={winner.team}
                    position={winner.position}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="w-full flex justify-center gap-x-1 py-5">
                <Text className="text-pallete-primary-light">{t("publicVote.science")}</Text><Text>{t("publicVote.computing")}</Text>
              </div>
              <div className="flex overflow-x-scroll gap-x-5 lg:flex-row">
                {bccWinners2022.map((winner, index) => (
                  <WinnersCard
                    key={index}
                    name={winner.title}
                    description={winner.description}
                    btnLabel={t("home.winners.details")}
                    modalLabel={winner.title}
                    modalDescription={winner.modalDescription}
                    youtubeID={winner.youtubeId}
                    isZenith={winner.isZenith}
                    team={winner.team}
                    position={winner.position}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <Image alt="elegant dots" src={wavesRight} className="absolute translate-y-72 right-0 w-[284px] md:w-[484px]" />
      </div>
    </div>
  )
}
