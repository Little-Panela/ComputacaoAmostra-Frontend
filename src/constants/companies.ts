import { env } from "../env.mjs";

const cdn = env.NEXT_PUBLIC_CDN_URL;
const cdnPath = `/static/img/`;

export const realization = [
  {
    website: "https://cesupa.br",
    alt: "cesupa",
    logo: `${cdnPath}cesupa-logo.png`,
  },
  {
    website: "https://cesupa.br",
    alt: "cabcc",
    logo: `${cdnPath}cabcc-logo.png`,
  },
  {
    website: "https://cesupa.br",
    alt: "caenc",
    logo: `${cdnPath}caenc-logo.png`,
  },
];

export const partnership = [
  {
    website: "https://mmibcotijuba.wixsite.com/mmibcotijuba",
    alt: "mmib",
    logo: `${cdnPath}mmib-logo.png`,
  },
  {
    website: "https://vale.com", 
    alt: "Vale", 
    logo: `${cdnPath}vale-logo.png` 
  },
];

export const sponsorship = [
  {
    website: "https://zenithinova.com.br",
    alt: "Zenith",
    logo: `${cdnPath}zenith-logo.png`,
  },
  {
    website: "https://www.robomind.com.br/",
    alt: "Robomind",
    logo: `${cdnPath}LOGO-Robomind-Branca-Horizontal-2.png`,
  },
  {
    website: "https://www.voxdatati.com.br",
    alt: "VoxxData",
    logo: `${cdnPath}voxx-logo.png`,
  },
  {
    website: "https://www.idopterlabs.com.br",
    alt: "IDopter",
    logo: `${cdnPath}idopter-logo.png`,
  },
  {
    website: "https://www.paratic.com.br",
    alt: "Paratic",
    logo: `${cdnPath}paratic-logo.png`,
  },
  {
    website: "https://www5.jambu.com.br/",
    alt: "Jambu",
    logo: `${cdnPath}jambu-logo.png`,
  },
  {
    website: "https://www.intersol.com.br/Index.sol",
    alt: "Sol",
    logo: `${cdnPath}sol-logo.png`,
  },
];
