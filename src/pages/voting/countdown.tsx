import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router.js";

import { getTimeRemaining } from "../../utils/get-time-remaining";

import { Default } from "../../components/layouts/Default";

import { env } from "../../env.mjs";

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
      description={`Inicio das votações em ${time.days < 0 ? "00" : time.days} dias, ${time.hours< 0 ? "00" : time.hours} horas, ${time.minutes < 0 ? "00" : time.minutes} minutos e ${time.seconds < 0 ? "00" : time.minutes} segundos`}
      path="/voting/countdown"
    >
      <div className="min-w-screen flex min-h-[calc(100vh_-_4rem)] flex-col items-center justify-center bg-gray-900 px-1 py-5">
        <div className="text-white">
          <h1 className="mb-5 text-center text-3xl font-extralight text-white">
            {t("countdown.heading")}
          </h1>
          <div className="flex w-full flex-wrap items-center justify-center text-center text-6xl max-sm:gap-2">
            <div className="mx-1 flex w-24 flex-col rounded-lg bg-white p-2">
              <span className="font-mono leading-none text-black" x-text="days">
                {time.days < 0 ? "00" : time.days}
              </span>
              <span className="font-mono text-sm uppercase leading-none text-black">
                {t("countdown.days")}
              </span>
            </div>
            <div className="mx-1 flex w-24 flex-col rounded-lg bg-white p-2">
              <span className="font-mono leading-none text-black" x-text="hours">
                {time.hours < 0 ? "00" : time.hours}
              </span>
              <span className="font-mono text-sm text-black uppercase leading-none">
                {t("countdown.hours")}
              </span>
            </div>
            <div className="mx-1 flex w-24 flex-col rounded-lg bg-white p-2">
              <span className="font-mono leading-none text-black" x-text="minutes">
                {time.minutes < 0 ? "00" : time.minutes}
              </span>
              <span className="font-mono text-sm uppercase text-black leading-none">
                {t("countdown.minutes")}
              </span>
            </div>
            <div className="mx-1 flex w-24 flex-col rounded-lg bg-white p-2">
              <span className="font-mono leading-none text-black" x-text="seconds">
                {time.seconds < 0 ? "00" : time.seconds}
              </span>
              <span className="font-mono text-sm uppercase leading-none text-black">
                {t("countdown.seconds")}
              </span>
            </div>
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
