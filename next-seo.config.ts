import type { DefaultSeoProps } from 'next-seo';

const title = "Computação Amostra"
const description = "Amazon Hacking é uma iniciativa do CESUPA que une os cursos de Ciência da Computação e Engenharia da Computação, a fim de estimular os alunos a desenvolverem soluções tecnológicas,  inovadoras e criativas, implementando no Pará uma nova forma de pensar e fazer economia. Nesse ano, o tema do maior evento tecnológico do norte será: 'Soluções de tecnologia para o Movimento das Mulheres das Ilhas de Belém - MMIB'. Dessa forma, os universitários elaboraram projetos sustentáveis para a Ilha de Cotijuba e sua comunidade, aliando-se ao MMIB, uma instituição sem fins lucrativos que busca firmar a autonomia e o conhecimento cidadão."
const baseURL = "https://computacao-amostra.com"

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