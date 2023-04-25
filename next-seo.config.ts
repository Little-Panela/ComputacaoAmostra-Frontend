import type { DefaultSeoProps } from 'next-seo';

const title = "Computação Amostra"
const description = "A Estimular alunos do CESUPA ao desenvolvimento de novas tecnologias e soluções inovadoras, incentivando o desenvolvimento do pensar tecnológico, da criatividade e da economia do Estado do Pará. Promover o inter-relacionamento entre alunos e empresas de tecnologia do Estado, proporcionando panorama favorável a troca de experiências de mercado e soluções provindas do conhecimento acadêmico."
const baseURL = "https://computacao-amostra-frontend.vercel.app/"

const config: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: '%s | Computação Amostra',
  description,
  canonical: baseURL,
  themeColor: '#111827',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: baseURL,
    title,
    description,
    images: [
      {
        url: `${baseURL}static/img/comp-amostra-banner.png`,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    site: '@computacaoamostra',
    cardType: 'summary_large_image',
  },
};

export default config;