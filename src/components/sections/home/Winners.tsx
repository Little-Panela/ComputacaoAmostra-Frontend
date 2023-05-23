import { CardWinner } from "../../modules/CardWinner";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { Button } from "../../elements/Button";
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";




/* eslint-disable @next/next/no-img-element */
export function Winners() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const ecompWinners = [
    {
      position: 1,
      title: t("winners.ecomp.firstPlace.title"),
      description: t("winners.ecomp.firstPlace.description"),
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
      title: t("winners.ecomp.secondPlace.title"),
      description: t("winners.ecomp.secondPlace.description"),
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
      title: t("winners.ecomp.thirdPlace.title"),
      description: t("winners.ecomp.thirdPlace.description"),
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
  
  const bccWinners = [
    {
      position: 1,
      title: t("winners.bcc.firstPlace.title"),
      description: t("winners.bcc.firstPlace.description"),
      isZenith: false,
      team: [
        "Thiago Augusto Souza Silva",
        "Arthur Kenji Enomoto de Oliveira",
        "Edson Ney da Paixao Filho",
        "Igor Hiroshi Matsumoto",
        "Vitoria Suely Pantoja Silva",
      ],
      youtubeId: ""
    },
    {
      position: 2,
      title: t("winners.bcc.secondPlace.title"),
      description: t("winners.bcc.secondPlace.description"),
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
      title: t("winners.bcc.thirdPlace.title"),
      description: t("winners.bcc.thirdPlace.description"),
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

  return (
    <section className="overflow-hidden relative py-4 bg-winner-linear lg:bg-winner-linear-md bg-no-repeat bg-cover flex flex-col items-center z-10 mx-auto px-2 pb-20 sm:px-6 lg:px-8 2xl:px-20">
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -right-48 opacity-30 rotate-[270deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -left-20 opacity-20 rotate-[45deg]"/>
      <Heading size="xl" className="border-b-4 border-pallete-primary pb-2 w-fit text-3xl text-center mb-5 xl:mb-20">
        {t("home.winners.title")}
      </Heading>
      <div className="mb-8 relative w-0 h-20 border-[1px] border-pallete-primary border-dashed after:content-[''] after:h-2 after:w-2 after:absolute after:bg-pallete-primary after:rounded-full after:bottom-0 after:translate-y-1/2 after:-translate-x-1/2 xl:hidden">
      </div>
      <div className="relative flex flex-col items-center text-center xl:grid xl:grid-cols-[auto fit-content auto] xl:w-full xl:mb-20">
        <div className="xl:col-start-2 xl:col-end-3 xl:flex xl:justify-center xl:row-span-2 xl:pt-12">
          <Heading size="xl" className="mb-4 text-3xl text-bold
                                         xl:after:contents-[''] xl:after:absolute xl:after:w-0 xl:after:h-1/3 xl:after:border-2 xl:after:border-pallete-primary xl:after:right-1/2 xl:after:translate-x-1/2 xl:after:top-0
                                         xl:before:contents-[''] xl:before:absolute xl:before:w-0 xl:before:h-1/3 xl:before:border-2 xl:before:border-pallete-primary xl:before:left-1/2 xl:before:-translate-x-1/2 xl:before:bottom-0">
            2022
          </Heading>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start mb-8 xl:col-start-1 xl:col-end-2 xl:mb-4">
          <Text className="font-bold">
            {t("home.winners.enginner")}
          </Text>
          <div className="relative flex flex-col gap-5 justify-center">
            <div className="hidden xl:block absolute h-[350px] w-full border-t-2 border-b-2 border-r-2 border-pallete-primary border-dashed -right-12 after:contents=[''] after:w-full after:h-0 after:border-[1px] after:border-pallete-primary after:absolute after:border-dashed after:top-1/2 after:-translate-y-1/2 after:left-5 2xl:after:left-20">

            </div>
            {ecompWinners.map((winner, index) => (
              <CardWinner key={index} course="ecomp" position={winner.position} title={winner.title} description={winner.description} isZenith={winner.isZenith} team={winner.team} youtubeId={winner.youtubeId}/>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start mb-5 xl:col-start-3 xl:col-end-4 xl:mb-4">
          <Text className="font-bold">
            {t("home.winners.science")}
          </Text>
          <div className="relative flex flex-col gap-5 justify-center">
            <div className="hidden xl:block absolute h-[350px] w-full border-t-2 border-b-2 border-l-2 border-pallete-primary border-dashed -left-12 after:contents=[''] after:w-full after:h-0 after:border-[1px] after:border-pallete-primary after:absolute after:border-dashed after:top-1/2 after:-translate-y-1/2 after:right-5 2xl:after:right-20">

            </div>
            {
              bccWinners.map((winner, index) => (
                <CardWinner key={index} course="bcc" position={winner.position} title={winner.title} description={winner.description} isZenith={winner.isZenith} team={winner.team} youtubeId={winner.youtubeId}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mb-8 relative w-0 h-20 border-[1px] border-pallete-primary border-dashed before:content-[''] before:h-2 before:w-2 before:absolute before:bg-pallete-primary before:rounded-full before:top-0 before:-translate-y-1/2 before:-translate-x-1/2 after:content-[''] after:h-2 after:w-2 after:absolute after:bg-pallete-primary after:rounded-full after:bottom-0 after:translate-y-1/2 after:-translate-x-1/2 xl:hidden">
      </div>
      <Heading size="xl" className="border-b-4 border-pallete-primary pb-2 w-fit text-3xl text-center mb-5">
        2023
      </Heading>
      <div className="relative text-center z-10 flex flex-col rounded-lg px-4 py-8 gap-3 md:gap-6 w-11/12 md:w-3/4 items-center lg:w-2/5 border-2 border-pallete-primary">
        <img src="/static/img/voting-trophy.svg" alt="Trophy" className="w-40 h-40" />
        <Text>
          {t("home.winners.call1")}
          <b className="text-pallete-primary">
            {t("home.winners.call2")}
          </b>
          {t("home.winners.call3")}
        </Text>
        <Text className="text-xs text-gray-400">
          {t("home.winners.call4")}
          <b className="text-pallete-primary">
            {t("home.winners.call5")}
          </b>
        </Text>
        <Button onClick={() => {void router.push("/voting")}}>{t("home.winners.vote")}</Button>
      </div>
    </section>
  );
}
