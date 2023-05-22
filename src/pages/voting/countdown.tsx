import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router.js";

import { getTimeRemaining } from "../../utils/get-time-remaining";

import { Default } from "../../components/layouts/Default";

import { Heading } from "../../components/elements/Heading";
import { Text } from "../../components/elements/Text";

import { env } from "../../env.mjs";

type CountdownFrameProps = {
  time: string;
  label: string;
}

const CountdownFrame = ({ label, time }: CountdownFrameProps) => {
  return (
    <div className="flex w-20 h-20 md:w-32 md:h-32 flex-col justify-center items-center bg-pallete-background-blue rounded-lg p-2 border-2 border-pallete-primary">
      <span x-text={label} className="font-mono leading-none text-2xl md:text-5xl">
        {time}
      </span>
      <span className="text-xs md:text-xl">
        {label}
      </span>
    </div>
  )
}

const Countdown: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter()

  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isVotingStarted) {
      void router.push("/voting");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Default
      title={`${t("navbar.voting")} Countdown`}
      description={`Inicio das votações em ${time.days < 0 ? "00" : time.days} dias, ${time.hours < 0 ? "00" : time.hours} horas, ${time.minutes < 0 ? "00" : time.minutes} minutos e ${time.seconds < 0 ? "00" : time.minutes} segundos`}
      path="/voting/countdown"
    >
      <div className="relative -mt-[160px] min-w-screen flex min-h-screen flex-col gap-16 items-center justify-center px-1 md:pt-14">

        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-[500px] md:w-[700px] lg:w-[1000px] -top-32 -left-0 md:left-40 z-[1]" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-[300px] md:w-[500px] lg:w-[900px] top-64 -right-32 lg:-right-64 z-[1]" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-[600px] top-80 -left-40 z-[1]" />


        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -right-48 opacity-30 rotate-[270deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -left-20 opacity-20 rotate-[45deg]" />


        <div className="relative z-10 flex flex-col items-center w-10/12 xl:w-3/5 gap-10">
          <Heading size="xl" className="text-4xl md:text-5xl w-10/12 text-center">
            {t("voting.header.projects")}
          </Heading>
          <Text className="text-xs text-gray-400 text-center md:text-lg">
            {t("voting.header.description")}
          </Text>
        </div>
        <div className="relative z-10 text-white">
          <Heading size="xl" className="mb-12 md:mb-16 text-center text-4xl md:text-5xl">
            {t("countdown.heading")}
          </Heading>
          <div className="flex w-full flex-wrap gap-1 md:gap-5 items-center justify-center text-center">
            <CountdownFrame label={t("countdown.days")} time={time.days < 0 ? "00" : String(time.days)} />
            <div className="flex flex-col gap-1">
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
            </div>
            <CountdownFrame label={t("countdown.hours")} time={time.hours < 0 ? "00" : String(time.hours)} />
            <div className="flex flex-col gap-1">
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
            </div>
            <CountdownFrame label={t("countdown.minutes")} time={time.minutes < 0 ? "00" : String(time.minutes)} />
            <div className="flex flex-col gap-1">
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
              <span className="block w-1 h-1 md:w-2 md:h-2 bg-gray-200 rounded-full" />
            </div>
            <CountdownFrame label={t("countdown.seconds")} time={time.seconds < 0 ? "00" : String(time.seconds)} />
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Countdown;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "pt",
      "en",
    ])),
  },
});
