import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";

import { Heading } from "../../components/elements/Heading";
import { Text } from "../../components/elements/Text";
import { Default } from "../../components/layouts/Default";

const Terms: NextPage = () => {
  return (
    <Default
      title="Termos de Serviço"
      description="Ao utilizar o serviço de votação aberta no site Computação Amostra, você concorda em cumprir os seguintes termos de serviço"
    >
      <header className="sm:min-h-[16.4145625rem] md:min-h-[27.0448125rem] mb-20 flex min-h-[13.025rem] min-w-[0.0625rem] max-w-[100%] flex-1 items-center justify-center bg-gray-900 px-4 text-center">
        <Heading className="sm:text-[4rem] text-[2.5rem] leading-4 text-white md:text-7xl">
          Termos de Serviço
        </Heading>
      </header>
      <div className="mx-auto flex flex-col px-6">
        <Text className="my-6">
          Ao utilizar o serviço de votação aberta no site Computação Amostra,
          você concorda em cumprir os seguintes termos de serviço:
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Uso do Serviço
        </Heading>
        <Text className="my-6">
          O serviço de votação aberta no site Computação Amostra é fornecido
          para uso pessoal e não comercial. Você concorda em usar o serviço
          apenas para fins permitidos pela lei e conforme estes termos de
          serviço.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Autenticação via Google OAuth
        </Heading>
        <Text className="my-6">
          O serviço de votação aberta utiliza a autenticação via Google OAuth
          para obter seu e-mail, foto de perfil e nome. Você concorda em
          permitir o acesso a essas informações por meio do Google OAuth e
          reconhece que a coleta, uso e proteção dessas informações estão
          sujeitas à Política de Privacidade descrita neste site.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Consentimento para Coleta de Dados
        </Heading>
        <Text className="my-6">
          Ao utilizar o serviço de votação aberta, você consente com a coleta,
          uso e proteção das informações pessoais fornecidas por meio da
          autenticação via Google OAuth, em conformidade com a Lei Geral de
          Proteção de Dados Pessoais (LGPD) e a Política de Privacidade deste
          site.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Uso Responsável
        </Heading>
        <Text className="my-6">
          Você concorda em usar o serviço de votação aberta de forma responsável
          e em conformidade com todas as leis aplicáveis. Você NÃO pode usar o
          serviço para fins ilegais, prejudiciais, ofensivos, discriminatórios,
          difamatórios ou de outra forma inapropriados.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Propriedade Intelectual
        </Heading>
        <Text className="my-6">
          Todos os direitos de propriedade intelectual relacionados ao serviço
          de votação aberta, incluindo, mas não se limitando a, marcas
          registradas, direitos autorais e patentes, são de propriedade da
          Computação Amostra do CESUPA ou de seus respectivos titulares. Você
          não tem permissão para usar, reproduzir, modificar ou distribuir
          qualquer conteúdo do serviço sem autorização prévia por escrito.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Responsabilidade
        </Heading>
        <Text className="my-6">
          A Computação Amostra do CESUPA não se responsabiliza por qualquer
          dano, perda, reclamação ou prejuízo decorrente do uso do serviço de
          votação aberta, incluindo, mas não se limitando a, falhas técnicas,
          interrupções, erros ou omissões.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Modificações dos Termos de Serviço:
        </Heading>
        <Text className="my-6">
          A Computação Amostra do CESUPA reserva-se o direito de modificar estes
          termos de serviço a qualquer momento, mediante aviso prévio aos
          usuários. O uso continuado do serviço após a modificação dos termos de
          serviço constitui aceitação dessas modificações.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Encerramento do Serviço
        </Heading>
        <Text className="my-6">
          A Computação Amostra do CESUPA reserva-se o direito de encerrar o
          serviço de votação aberta a qualquer momento, sem aviso prévio.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Jurisdição e Lei Aplicável
        </Heading>
        <Text className="my-6">
          Estes termos de serviço serão regidos e interpretados de acordo com as
          leis do Brasil, e qualquer disputa relacionada a estes termos de
          serviço será submetida à jurisdição exclusiva dos tribunais do Brasil.
        </Text>
        <Text className="my-6 ">
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