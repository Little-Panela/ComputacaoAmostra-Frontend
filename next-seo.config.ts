import type { DefaultSeoProps } from 'next-seo';

const title = "Computação Amostra"
const description = "Amazon Hacking é um programa de formação para alunos dos cursos de Ciência da Computação e Engenharia da Computação do CESUPA, que visa conectar empresas comprometidas com a sustentabilidade amazônica; a comunidade local e todo o seu conhecimento tradicional; e o conhecimento científico e tecnológico para o desenvolvimento bioeconômico da região."
const baseURL = "https://computacao-amostra.com"

const config: DefaultSeoProps = {
  defaultTitle: title,
  titleTemplate: '%s | Computação Amostra',
  description,
  canonical: baseURL,
  themeColor: '#000b1cd9',
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