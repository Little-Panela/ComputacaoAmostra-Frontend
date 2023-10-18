/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CardTrophy from "../../../../public/static/img/trophy icon.png"
import { realization, partnership, sponsorship } from "../../../constants/companies";
import { ReactNode, createElement } from "react";
import { Heading } from "../../elements/Heading";
import { Button } from "../../elements/Button";

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

export function PublicVoteSection() {
  const { t } = useTranslation("common");

  return (
    <div className="h-full">
      <Text title={t("publicVote.award")}/>
      <div className="w-full px-10">
      <WinnersCard name={t("publicVote.engineeringWinner.2022.name")} description={t("publicVote.engineeringWinner.2022.description")} btnLabel={t("home.winners.details")}/>
      </div>
    </div>
  )
}

export function Logos() {
  const { t } = useTranslation("common");

  return (
    <section className="overflow-hidden relative py-20 pb-28 flex flex-col gap-32">
      <img src="/static/img/video-right-tree.png" alt="Planta da direita" className="absolute h-[600px] xl:h-[800px] top-20 lg:top-48 right-0" />
      <img src="/static/img/video-left-tree.png" alt="Planta da esquerda" className="absolute h-[600px] xl:h-[800px] z-[2] top-20 lg:top-48 left-0" />
      
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -left-[500px]"/>
      {/* <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -right-96"/> */}

      <img src="/static/img/video-wave.png" alt="Onda de Cima" className="absolute h-[600px] xl:h-[800px] -top-0 z-[0] -left-48 opacity-30 rotate-[45deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Direita" className="absolute h-[600px] xl:h-[800px] -bottom-0 -right-48 opacity-30 rotate-[225deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -left-20 opacity-20 rotate-[45deg]"/>
      
      <LogoSection title={t("home.logos.sponsorship")}>
        {sponsorship.map((i) => (
          <a
            href={i.website}
            key={i.alt}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src={i.logo}
              alt={i.alt}
              className="w-[150px] h-auto md:w-[200px]"
            />
          </a>
        ))}
      </LogoSection>
      <LogoSection title={t("home.logos.partners")}>
        {partnership.map((i) => (
          <a
            href={i.website}
            key={i.alt}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src={i.logo}
              alt={i.alt}
              className="w-[150px] h-auto md:w-[200px]"
            />
          </a>
        ))}
      </LogoSection>
      <LogoSection title={t("home.logos.realization")}>
        {realization.map((i) => (
          <a
            href={i.website}
            key={i.alt}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src={i.logo}
              alt={i.alt}
              className="w-[150px] h-auto md:w-[200px]"
            />
          </a>
        ))}
      </LogoSection>

    </section>
  );
}
