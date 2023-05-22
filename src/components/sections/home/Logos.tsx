/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { realization, partnership, sponsorship } from "../../../constants/companies";
import { ReactNode } from "react";
import { Heading } from "../../elements/Heading";

type LogoSectionProps = {
  title: string,
  children: ReactNode
}

function LogoSection({ children, title }: LogoSectionProps) {
  return (
    <div className="relative z-10 flex flex-col gap-12 md:gap-16 items-center">
      <Heading size="xl" className="border-b-2 border-pallete-primary pb-4 text-3xl md:text-4xl">
        {title}
      </Heading>
      <div className="flex flex-wrap justify-center items-center gap-20 w-8/12 max-w-7xl">
        {children}
      </div>
    </div>
  )
}

export function Logos() {
  const { t } = useTranslation("common");

  return (
    <section className="relative py-20 pb-28 flex flex-col gap-32">
      <img src="/static/img/video-right-tree.png" alt="Planta da direita" className="absolute h-[600px] xl:h-[800px] top-20 lg:top-48 right-0" />
      <img src="/static/img/video-left-tree.png" alt="Planta da esquerda" className="absolute h-[600px] xl:h-[800px] top-20 lg:top-48 left-0" />
      
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -left-[500px]"/>
      {/* <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -right-96"/> */}

      <img src="/static/img/video-wave.png" alt="Onda de Cima" className="absolute h-[600px] xl:h-[800px] -top-0 -left-48 opacity-30 rotate-[45deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Direita" className="absolute h-[600px] xl:h-[800px] -bottom-0 -right-48 opacity-30 rotate-[225deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -left-20 opacity-20 rotate-[45deg]"/>
      
      <LogoSection title={t("home.logos.sponsorship")}>
        {sponsorship.map((i) => (
          <a
            href={i.website}
            key={i.alt}
            target="_blank"
            rel="noopener noreferrer"
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
