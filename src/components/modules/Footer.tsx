import { useTranslation } from "next-i18next";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";
import { Text } from "../elements/Text";

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-pallete-background- relative overflow-hidden">
      <div className="pt-10 lg:pt-0 flex h-auto w-full flex-col items-center">
        <div className="flex flex-col w-full lg:flex-row lg:justify-around">
          <div className="flex justify-center items-center flex-col">
            <img
              src="/static/img/logo-computacao-amostra.png"
              alt="logo computação amostra"
              className="h-auto w-[319px]"
            />
            <div className="mb-10 mt-10 lg:mb-0 flex items-center justify-center space-x-10">
              <a
                href="https://www.facebook.com/CesupaOnline"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img src="/static/img/facebook-white.svg" alt="facebook logo" className="opacity-80 transition-opacity hover:opacity-100"/>
              </a>
              <a
                href="https://www.instagram.com/cesupaonline/"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img
                  src="/static/img/instagram-white.svg"
                  alt="instagram logo"
                  className="opacity-80 transition-opacity hover:opacity-100"
                />
              </a>
              <a
                href="https://www.youtube.com/c/CesupaOnline"
                target="_blank"
                rel="noreferrer"
                className="z-[2]"
              >
                <img src="/static/img/youtube-white.svg" alt="youtube logo" className="opacity-80 transition-opacity hover:opacity-100"/>
              </a>
            </div>
          </div>
          <div className="flex items-center w-auto box-border lg:pt-[110px] justify-between flex-col">
            <LanguageSelector />
            <div className="hidden mt-3 lg:flex items-center justify-center lg:w-[320px]">
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
          </div>

          <div className="flex lg:w-[320px] flex-col items-center justify-center">
          <Link href="https://zenithinova.com.br" target="_blank" className="relative z-10 hover:scale-105 transition-transform">
            <img
                src="/static/img/zenith.svg"
                alt="logo zenith"
                className="mt-10 h-[172px] w-[202px]"
              />
          </Link>
            
            <Text className="mb-[60px] font-bold">
              {t("home.footer.partner")} <a className="text-red-600">♥</a>
            </Text>
          </div>
        </div>
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
        <div className="z-[2] mt-10 flex h-[60px] w-full items-center justify-center border-t-2 border-t-pallete-primary bg-black">
          <a className="text-center text-xs leading-5 text-gray-500">
            {t("footer.copyrightBefore")}
            <a className="text-center text-xs leading-5 text-pallete-primary">
              {t("footer.copyrightCesupa")}
            </a>
            {t("footer.copyrightAfter")}
          </a>
        </div>
        <img
          src="/static/img/zenith-light.png"
          alt="zenith-light"
          className="absolute lg:w-[10000px] lg:top-[-300px] lg:h-[500px] bottom-[-200px] z-[0] h-auto w-auto scale-150 transform"
        />
      </div>
    </footer>
  );
}
