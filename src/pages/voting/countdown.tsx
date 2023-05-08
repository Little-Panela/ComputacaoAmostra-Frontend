import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Default } from "../../components/layouts/Default";
import { getTimeRemaining } from "../../utils/get-time-remaining";

const Countdown: NextPage = () => {
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
    }
  }, []);

  return (
    <Default
      title="Votação Countdown"
      description={`Inicio das votações em ${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos`}
      path="/voting/countdown"
    >
      <div className="min-w-screen flex min-h-[calc(100vh_-_4rem)] flex-col items-center justify-center bg-gray-900 px-5 py-5">
        <div className="text-gray-900">
          <h1 className="mb-5 text-center text-3xl font-extralight text-white">
            Inicio das votações
          </h1>
          <div className="flex w-full items-center justify-center text-center text-6xl flex-wrap max-sm:gap-2">
            <div className="flex flex-col mx-1 w-24 rounded-lg bg-white p-2">
              <span className="font-mono leading-none" x-text="days">
                {time.days}
              </span>
              <span className="font-mono text-sm uppercase leading-none">
                Dias
              </span>
            </div>
            <div className="flex flex-col mx-1 w-24 rounded-lg bg-white p-2">
              <span className="font-mono leading-none" x-text="hours">
                {time.hours}
              </span>
              <span className="font-mono text-sm uppercase leading-none">
                Horas
              </span>
            </div>
            <div className="flex flex-col mx-1 w-24 rounded-lg bg-white p-2">
              <span className="font-mono leading-none" x-text="minutes">
                {time.minutes}
              </span>
              <span className="font-mono text-sm uppercase leading-none">
                Minutos
              </span>
            </div>
            <div className="flex flex-col mx-1 w-24 rounded-lg bg-white p-2">
              <span className="font-mono leading-none" x-text="seconds">
                {time.seconds}
              </span>
              <span className="font-mono text-sm uppercase leading-none">
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default Countdown;
