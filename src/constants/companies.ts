import { env } from "../env.mjs";

const cdn = env.NEXT_PUBLIC_CDN_URL;
const cdnPath = `${cdn}/logos/`;

export const realization = [
  {
    website: "https://cesupa.br",
    alt: "cesupa",
    logo: `${cdnPath}cesupa-logo.png`,
  },
];

export const partnership = [
  {
    website: "https://mmibcotijuba.wixsite.com/mmibcotijuba",
    alt: "mmib",
    logo: `${cdnPath}mmib.png`,
  },
  { website: "https://vale.com", alt: "Vale", logo: `${cdnPath}vale.png` },
];

export const sponsorship = [
  {
    website: "https://www5.jambu.com.br/",
    alt: "Jambu",
    logo: `${cdnPath}jambu.png`,
  },
];
