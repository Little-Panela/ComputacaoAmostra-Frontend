import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";

import { Heading } from "../../components/elements/Heading";
import { Text } from "../../components/elements/Text";
import { Default } from "../../components/layouts/Default";

const PrivacyPolicy: NextPage = () => {
  return (
    <Default
      title="Política de Privacidade"
      description="Esta Política de Privacidade descreve como o site Computação Amostra
      do CESUPA"
    >
      <header className="sm:min-h-[16.4145625rem] md:min-h-[27.0448125rem] mb-20 flex min-h-[13.025rem] min-w-[0.0625rem] max-w-[100%] flex-1 items-center justify-center bg-gray-900 px-4 text-center">
        <Heading className="sm:text-[4rem] text-[2.5rem] leading-4 text-white md:text-7xl">
          Política de Privacidade
        </Heading>
      </header>
      <div className="mx-auto flex flex-col px-6">
        <Text className="my-6">
          Esta Política de Privacidade descreve como o site Computação Amostra
          do CESUPA (doravante referido como &quot;nós&quot;, &quot;nosso&quot;
          ou &quot;site&quot;) coleta, usa e protege as informações pessoais dos
          usuários durante o processo de votação aberta, utilizando o serviço de
          autenticação OAuth do Google em conjunto com o NextAuth para obter o
          endereço de e-mail, foto de perfil e nome dos usuários, em
          conformidade com a Lei nº 13.709 de 14 de agosto de 2018 (Lei Geral de
          Proteção de Dados Pessoais), doravante denominada de &quot;LGPD&quot;.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Coleta de Informações
        </Heading>
        <Text className="my-6">
          Para participar da votação aberta no site Computação Amostra, é
          necessário autenticar-se usando o serviço de autenticação OAuth do
          Google, em conjunto com o NextAuth. Durante o processo de
          autenticação, o Google e o NextAuth podem fornecer ao nosso site as
          seguintes informações pessoais do usuário: endereço de e-mail, foto de
          perfil e nome.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Uso das Informações
        </Heading>
        <Text className="my-6">
          As informações pessoais coletadas durante o processo de autenticação
          com o Google e o NextAuth serão usadas exclusivamente para fins de
          identificação do usuário e para permitir a participação na votação
          aberta do site Computação Amostra, conforme a LGPD. Essas informações
          não serão compartilhadas com terceiros sem o consentimento prévio do
          usuário, a menos que exigido por lei.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Proteção das Informações
        </Heading>
        <Text className="my-6">
          Nós implementamos medidas de segurança adequadas para proteger as
          informações pessoais dos usuários contra acesso não autorizado,
          divulgação, alteração ou destruição, conforme a LGPD. No entanto,
          nenhum sistema de segurança é completamente impenetrável, e não
          podemos garantir a segurança absoluta das informações pessoais dos
          usuários.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Cookies
        </Heading>
        <Text className="my-6">
          Nosso site utiliza cookies para melhorar a experiência do usuário.
          Cookies são pequenos arquivos de texto armazenados no dispositivo do
          usuário que contêm informações sobre a navegação no site. Os cookies
          podem ser usados para lembrar as preferências do usuário, personalizar
          o conteúdo e fornecer análises sobre a utilização do site, conforme a
          LGPD. O usuário pode optar por desativar os cookies nas configurações
          do navegador, mas isso pode afetar a funcionalidade do site.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Links Externos
        </Heading>
        <Text className="my-6">
          Nosso site pode conter links para sites de terceiros. Não nos
          responsabilizamos pelas práticas de privacidade ou pelo conteúdo
          desses sites. Recomendamos que os usuários revisem as políticas de
          privacidade dos sites de terceiros antes de fornecerem qualquer
          informação pessoal, conforme a LGPD.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Alterações na Política de Privacidade
        </Heading>
        <Text className="my-6">
          Podemos atualizar esta Política de Privacidade periodicamente para
          refletir mudanças em nossas práticas de coleta, uso e proteção de
          informações, conforme a LGPD. Recomendamos que os usuários revisem
          esta página regularmente para se manterem informados sobre as práticas
          de privacidade do nosso site.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Consentimento
        </Heading>
        <Text className="my-6">
          Ao utilizar o serviço de autenticação OAuth do Google em conjunto com
          o NextAuth para participar da votação aberta no site Computação
          Amostra, o usuário concorda com a coleta, uso e proteção das
          informações pessoais de acordo com esta Política de Privacidade,
          conforme a LGPD. O usuário tem o direito de revogar seu consentimento
          a qualquer momento, entrando em contato conosco através dos meios de
          contato fornecidos no site.
        </Text>
        <Heading className="border-b-[1px] border-b-gray-950 py-6">
          Contato
        </Heading>
        <Text className="my-6">
          Se o usuário tiver alguma dúvida, preocupação ou solicitação em
          relação a esta Política de Privacidade, ou ao uso de suas informações
          pessoais, ele pode entrar em contato conosco através dos seguintes
          meios:
        </Text>
        <Text className="my-6">E-mail: contato@computacao-amostra.com</Text>
        <Text className="my-6">Telefone: +55 (91) 3205-9301</Text>
        <Text className="my-6">
          Endereço: Av. Alcindo Cacela, 1523 - Umarizal, 66065-219, Belém, Pará,
          Brasil.
        </Text>
        <Text className="my-6 text-gray-500">
          Esta Política de Privacidade foi atualizada pela última vez em 7 de
          maio de 2023.
        </Text>
      </div>
    </Default>
  );
};

export default PrivacyPolicy;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "pt",
      "en",
    ])),
  },
});