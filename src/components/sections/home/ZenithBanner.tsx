import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import Link from "next/dist/client/link";

import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

/* eslint-disable @next/next/no-img-element */
export function ZenithBanner() {
  const { t } = useTranslation("common");

  return (
    <section className="relative bg-pallete-background-zen flex flex-col items-center gap-20 pt-24 pb-32 lg:flex-row-reverse lg:justify-center lg:px-20 xl:px-40">
      <img src="/static/img/zenith-wave-top.png" alt="Wave Top" className="absolute top-0 right-0 lg:scale-[200%]" />
      <img src="/static/img/zenith-wave-middle.png" alt="Wave Middle" className="absolute left-0 bottom-1/2 translate-y-1/2 lg:scale-[200%]" />
      <img src="/static/img/zenith-wave-bottom.png" alt="Wave Bottom" className="absolute bottom-0 right-0 lg:scale-[200%]" />

      <img src="/static/img/zenith-light.png" alt="Zenith Light" className="absolute -bottom-64 -left-64 xl:w-[900px]" />
      <img src="/static/img/zenith-light.png" alt="Zenith Light" className="absolute -bottom-20 -right-48 xl:-right-24 xl:-bottom-40 xl:w-[1000px]" />
      <img src="/static/img/zenith-light.png" alt="Zenith Light" className="absolute -top-48 -left-64 xl:left-48 xl:w-[1100px] xl:-top-64" />

      <img src="/static/img/zenith.svg" alt="Logo da Zenith Inova" className="w-80 xl:w-96" />
      <div className="flex flex-col items-center gap-20 z-10 lg:gap-10 lg:items-start">
        <Heading className="text-3xl text-center w-3/4 md:text-5xl lg:text-left xl:w-8/12">
          {t("home.zenith.title1")}
          <b className="text-pallete-purple-zen">
            {t("home.zenith.title2")}
          </b>
          {t("home.zenith.title3")}
          <b className="text-pallete-purple-zen">
            {t("home.zenith.title4")}
          </b>
        </Heading>
        <div className="flex flex-col gap-5 w-fit items-center lg:flex-row">
          <Link href="https://zenithinova.com.br" target="_blank">
            <button className="flex hover:bg-pallete-dark-purple-zen transition-colors justify-center items-center text-bold text-sm px-7 py-3 bg-pallete-purple-zen rounded-3xl">
              {t("home.zenith.button")}
            </button>
          </Link>
          <div className="flex gap-7 lg:gap-5">
            <Link href="http://instagram.com/_u/zenith.inova/">
              <AiOutlineInstagram size={42} fill="#7327BB" className="hover:fill-pallete-dark-purple-zen"/>
            </Link>
            <Link href="https://wa.me/5591989661300?text=Olá,%20gostaria%20de%20conversar%20sobre%20os%20projetos%20da%20Zenith%20Inova%20!!!">
              <AiOutlineWhatsApp size={42} fill="#7327BB" className="hover:fill-pallete-dark-purple-zen"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
