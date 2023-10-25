import { useTranslation } from "next-i18next";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";
import { Text } from "../elements/Text";

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const { t } = useTranslation("common");

  function scrollToSection(section: HTMLElement){
    console.log(section?.offsetTop)
    window?.scrollTo({
      top: section?.offsetTop - 10,
      behavior:'smooth',
    })
  }

  return (
    <footer className="relative flex flex-col z-[5] overflow-hidden">
      <div className="hidden lg:flex w-full justify-between ">
        <div className="flex h-1  border-t-2 border-#FFF lg:w-[35%]"></div>
        <div className="flex h-1 border-t-2 border-#FFF lg:w-[35%]"></div>
      </div>
      <div className="pt-10 lg:pt-0 z-10 flex h-auto w-full flex-col justify-center items-center">
        <div className="flex flex-col w-full lg:flex-row items-center lg:justify-evenly">
          {/* div zenith */}
          <div className="flex w-[100%] flex-row items-center justify-between lg:w-auto justify-center lg:order-1">
            <div className="w-[20%] h-16 lg:flex h-1 border-t-2 border-#FFF lg:hidden"></div>
            <div className="flex pr-0 lg:w-[320px] flex-col items-center justify-center">
              <Link href="https://zenithinova.com.br" target="_blank" className="relative z-10 hover:scale-105 transition-transform">
                <img
                  src="/static/img/zenith.svg"
                  alt="logo zenith"
                  className="mt-10 h-[172px] w-[202px]"
                />
              </Link>
              <Text  className="mb-[60px] font-light text-sm">
                {t("home.footer.partner")} <a className="text-red-600">♥</a>
              </Text>
            </div>
            <div className="w-[20%] h-16 lg:flex h-1 border-t-2 border-#FFF lg:hidden"></div>
          </div>
            {/* div computacao */}
            <div className="flex justify-center items-center justify-center flex-col lg:gap-6 flex-row lg:order-3">
             <img
               src="/static/img/nova-logo.svg"
               alt="logo computação amostra"
               className="h-auto w-[319px]"
             />
            <div className="mb-10 mt-10 lg:mb-0 mt-0 w-full flex items-center justify-between">
              <a
                href="https://www.instagram.com/cesupaonline/"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img
                  src="/static/icons/ri_instagram-fill.svg"
                  alt="instagram logo"
                  className="opacity-80 transition-opacity hover:opacity-100"
                />
              </a>
              <a
                href="https://www.facebook.com/CesupaOnline"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img src="/static/icons/ic_twotone-facebook.svg" alt="facebook logo" className="opacity-80 transition-opacity hover:opacity-100"/>
              </a>
              <a
                href="https://www.youtube.com/c/CesupaOnline"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img src="/static/icons/bi_youtube.svg" alt="youtube logo" className="opacity-80 transition-opacity hover:opacity-100"/>
              </a>
            </div>
            </div>
            {/* div info */}
            <div className="flex items-center m-12 w-auto box-border lg:pt-10 justify-between flex-col gap-20 lg:order-2 lg:m-0">
              {/* div texto inicio */}
            <div className="flex items-center flex-col space-y-6" >
              <button className="z-[2] pr-[5px]" onClick={()=> scrollToSection(document.getElementById('hero') as HTMLElement)}>
                <p className="text-m font-light leading-5 text-white transition-colors hover:text-gray-400">
                  {t("home.footer.start")}
                </p>
              </button>
              <button className="z-[2] pr-[5px]" onClick={()=> scrollToSection(document.getElementById('program') as HTMLElement)}>
                <p className="text-m font-light leading-5 text-white transition-colors hover:text-gray-400">
                  {t("home.footer.program")}
                </p>
              </button>
              <button className="z-[2] pr-[5px]" onClick={()=> scrollToSection(document.getElementById('about') as HTMLElement)}>
                <p className="text-m font-light leading-5 text-white transition-colors hover:text-gray-400">
                  {t("home.footer.objectives")}
                </p>
              </button>
              <button className="z-[2] pr-[5px]" onClick={()=> scrollToSection(document.getElementById('winners') as HTMLElement)}>
                <p className="text-m font-light leading-5 text-white transition-colors hover:text-gray-400">
                  {t("home.footer.winners")}
                </p>
              </button>
            </div>
            {/* div resto */}
            <div className="flex flex-col space-y-16 justify-center items-center flex-center pb-5">
              {/* div mudar idioma */}
              <LanguageSelector />
              {/* div pp e ts  sm*/}
              <div className="mt-3 lg:hidden flex flex-wrap items-center justify-center space-x-7">
              <Link className="z-[2]" href="/legal/privacy-policy">
                <p className="text-xs font-bold leading-5 text-white hover:text-pallete-primary transition-colors">
                  {t("footer.privacyPolicy")}
                </p>
              </Link>
              <div className="divide-white font-bold">|</div>
              <Link className="z-[2]" href="/legal/terms">
                <p className="text-xs font-bold leading-5 text-white hover:text-pallete-primary transition-colors">
                  {t("footer.terms")}
                </p>
              </Link>
              </div>
              {/* div pp e ts  lg*/}
              <div className="hidden lg:flex items-center justify-center lg:w-[320px]">
                <Link className="z-[2] pr-[5px]" href="/legal/privacy-policy">
                  <p className="text-xs font-bold leading-5 text-white transition-colors hover:text-gray-400">
                    {t("footer.privacyPolicy")}
                  </p>
                </Link>
                <div className="divide-white font-bold">|</div>
                <Link className="z-[2] pl-[5px]" href="/legal/terms">
                  <p className="text-xs font-bold leading-5 text-white transition-colors hover:text-gray-400">
                    {t("footer.terms")}
                  </p>
                </Link>
              </div>
              {/* div Cesupa */}
               <div className="flex w-40 flex-wrap justify-center lg:w-auto items-center">
                <a className="text-center text-xs leading-5 text-gray-500">
                  {t("footer.copyrightBefore")}
                  <a className="text-center text-xs leading-5 text-pallete-primary">
                    {t("footer.copyrightCesupa")}
                  </a>
                {t("footer.copyrightAfter")}
                </a>
               </div>
            </div >
            </div>
          
        </div>
        <img
          src="/static/img/zenith-light.png"
          alt="zenith-light"
          className="absolute z-[-1] lg:w-[10000px] lg:top-[-300px] lg:h-[500px] bottom-[-200px] h-auto w-auto scale-150 transform"
        />
      </div>
    </footer>
  );
}
