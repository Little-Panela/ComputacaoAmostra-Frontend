import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";

import { Heading } from "../../components/elements/Heading";
import { Text } from "../../components/elements/Text";
import { Default } from "../../components/layouts/Default";
import { ReactNode } from "react";

type TermContentProps = {
  title: string,
  children: ReactNode,
}

const TermContent = ({ title, children }: TermContentProps) => {
  return (
    <div>
      <Heading size="xl" className="border-b-2 border-pallete-primary pb-4 text-2xl mb-14">
        {title}
      </Heading>
      <Text className="text-gray-400">
        {children}
      </Text>
    </div>
  )
}

const Terms: NextPage = () => {
  return (
    <Default
      title="Termos de Serviço"
      description="Ao utilizar o serviço de votação aberta no site Computação Amostra, você concorda em cumprir os seguintes termos de serviço"
    >
      <header className="flex mt-20 gap-16 flex-col sm:min-h-[16.4145625rem] md:min-h-[27.0448125rem] mb-20 min-h-[13.025rem] min-w-[0.0625rem] max-w-[100%] flex-1 items-center justify-center px-4 text-center">
        <Heading className="sm:text-[4rem] text-[2.5rem] leading-4 text-white md:text-7xl">
          <b>
            Termos
          </b>
          {` de Serviço`}
        </Heading>
        <p className="text-xl text-gray-400 w-1/2">
          Ao utilizar o serviço de votação aberta no site Computação Amostra,
          você concorda em cumprir os seguintes termos de serviço:
        </p>
      </header>
      <div className="max-w-7xl mx-auto flex flex-col px-12 gap-20 pb-20">
        <TermContent title="Uso do Serviço">
          O serviço de votação aberta no site Computação Amostra é fornecido
          para uso pessoal e não comercial. Você concorda em usar o serviço
          apenas para fins permitidos pela lei e conforme estes termos de
          serviço.
        </TermContent>
        <TermContent title="Autenticação via Google OAuth">
          O serviço de votação aberta utiliza a autenticação via Google OAuth
          para obter seu e-mail, foto de perfil e nome. Você concorda em
          permitir o acesso a essas informações por meio do Google OAuth e
          reconhece que a coleta, uso e proteção dessas informações estão
          sujeitas à Política de Privacidade descrita neste site.
        </TermContent>
        <TermContent title="Consentimento para Coleta de Dados">
          Ao utilizar o serviço de votação aberta, você consente com a coleta,
          uso e proteção das informações pessoais fornecidas por meio da
          autenticação via Google OAuth, em conformidade com a Lei Geral de
          Proteção de Dados Pessoais (LGPD) e a Política de Privacidade deste
          site.
        </TermContent>
        <TermContent title="Uso Responsável">
          Você concorda em usar o serviço de votação aberta de forma responsável
          e em conformidade com todas as leis aplicáveis. Você NÃO pode usar o
          serviço para fins ilegais, prejudiciais, ofensivos, discriminatórios,
          difamatórios ou de outra forma inapropriados.
        </TermContent>
        <TermContent title="Propriedade Intelectual">
          Todos os direitos de propriedade intelectual relacionados ao serviço
          de votação aberta, incluindo, mas não se limitando a, marcas
          registradas, direitos autorais e patentes, são de propriedade da
          Computação Amostra do CESUPA ou de seus respectivos titulares. Você
          não tem permissão para usar, reproduzir, modificar ou distribuir
          qualquer conteúdo do serviço sem autorização prévia por escrito.
        </TermContent>
        <TermContent title="Responsabilidade">
          A Computação Amostra do CESUPA não se responsabiliza por qualquer
          dano, perda, reclamação ou prejuízo decorrente do uso do serviço de
          votação aberta, incluindo, mas não se limitando a, falhas técnicas,
          interrupções, erros ou omissões.
        </TermContent>
        <TermContent title="Modificações dos Termos de Serviço:">
          A Computação Amostra do CESUPA reserva-se o direito de modificar estes
          termos de serviço a qualquer momento, mediante aviso prévio aos
          usuários. O uso continuado do serviço após a modificação dos termos de
          serviço constitui aceitação dessas modificações.
        </TermContent>
        <TermContent title="Encerramento do Serviço">
          A Computação Amostra do CESUPA reserva-se o direito de encerrar o
          serviço de votação aberta a qualquer momento, sem aviso prévio.
        </TermContent>
        <TermContent title="Jurisdição e Lei Aplicável">
          Estes termos de serviço serão regidos e interpretados de acordo com as
          leis do Brasil, e qualquer disputa relacionada a estes termos de
          serviço será submetida à jurisdição exclusiva dos tribunais do Brasil.
        </TermContent>
        <Text className="my-6 mx-auto w-3/4 text-center">
          Ao utilizar o serviço de votação aberta no site Computação Amostra do
          CESUPA, você concorda em cumprir estes termos de serviço. Caso não
          concorde com estes termos, por favor, não utilize o serviço.
        </Text>
      </div>
    </Default>
  );
};

export default Terms;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "pt",
      "en",
    ])),
  },
});