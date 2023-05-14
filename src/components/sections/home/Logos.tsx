import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const CDN = "https://cdn.computacao-amostra.com/logos/"
const Realization = [{ website: "https://cesupa.br", alt: "cesupa",  logo:`${CDN}cesupa-logo.png`}]
const Partnership = [{ website: "https://mmibcotijuba.wixsite.com/mmibcotijuba", alt: "mmib",  logo:`${CDN}mmib.png`}, { website: "https://vale.com", alt: "Vale",  logo:`${CDN}vale.png`}]
const Sponsorship = [{ website: "https://www5.jambu.com.br/", alt: "Jambu",  logo:`${CDN}jambu.png`}]

export function Logos() {
  const { t } = useTranslation("common");

  return (
    <section className="bg-green-900 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-wrap max-w-7xl justify-around py-10 max-sm:flex-col max-sm:gap-5">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">{t("home.realization")}</h2>
          {Realization.map(i => (
            <a href={i.website} key={i.alt} target="_blank" rel="noopener noreferrer">
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
          <h2 className="text-3xl font-bold text-white">{t("home.partnership")}</h2>
          {Partnership.map(i => (
            <a href={i.website} key={i.alt} target="_blank" rel="noopener noreferrer">
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
          <h2 className="text-3xl font-bold text-white">{t("home.sponsorship")}</h2>
          {Sponsorship.map(i => (
            <a href={i.website} key={i.alt} target="_blank" rel="noopener noreferrer">
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
