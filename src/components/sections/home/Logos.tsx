/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { realization, partnership, sponsorship } from "../../../constants/companies";

export function Logos() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-green-900 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-around py-10 max-sm:flex-col max-sm:gap-5">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">
            {t("home.realization")}
          </h2>
          {realization.map((i) => (
            <a
              href={i.website}
              key={i.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={i.logo}
                alt={i.alt}
                width={120}
                height={120}
                quality={100}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">
            {t("home.partnership")}
          </h2>
          {partnership.map((i) => (
            <a
              href={i.website}
              key={i.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={i.logo}
                alt={i.alt}
                width={120}
                height={120}
                quality={100}
              />
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">
            {t("home.sponsorship")}
          </h2>
          {sponsorship.map((i) => (
            <a
              href={i.website}
              key={i.alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={i.logo}
                alt={i.alt}
                width={120}
                height={120}
                quality={100}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
