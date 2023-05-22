import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";

import { Heading } from "../../components/elements/Heading";
import { Text } from "../../components/elements/Text";
import { Default } from "../../components/layouts/Default";
import { ReactNode, createElement } from "react";
import { IconType } from "react-icons";
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BsGeoAlt } from 'react-icons/bs'

type PolicyContentProps = {
  title: string,
  children: ReactNode,
}

type ContactProps = {
  label: string,
  icon: IconType,
  content: string,
}

const PolicyContent = ({ title, children }: PolicyContentProps) => {
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

const Contact = ({ content, icon, label }: ContactProps) => {
  return (
    <div className="flex flex-col gap-3">
      <Text className="font-bold">
        {label}
      </Text>
      <div className="flex gap-3 items-center">
        {createElement(icon, { size: 24, fill: "#01E5FB" })}
        <Text className="text-gray-400">
          {content}
        </Text>
      </div>
    </div>
  )
}

const PrivacyPolicy: NextPage = () => {
  return (
    <Default
      title="Política de Privacidade"
      description="Esta Política de Privacidade descreve como o site Computação Amostra
      do CESUPA"
    >
      <header className="relative pt-[160px] flex gap-16 flex-col sm:min-h-[16.4145625rem] md:min-h-[27.0448125rem] mb-20 min-h-[13.025rem] min-w-[0.0625rem] max-w-[100%] flex-1 items-center justify-center px-4 text-center">
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-1/2 left-0" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute top-full -right-96" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-full -bottom-[650%] md:-bottom-[480%] lg:-bottom-[360%]" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-full h-auto top-[300%] right-0" />
        <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute w-[900px] -bottom-[500%] md:-bottom-[300%] -right-96" />

        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-40 -right-48 opacity-30 rotate-[270deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-[100%] -left-20 opacity-20 rotate-[45deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-[250%] -left-48 opacity-10 rotate-[270deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-[250%] -right-48 opacity-10 rotate-[270deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-[400%] -left-48 opacity-20 rotate-[70deg]" />
        <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -bottom-[500%] md:-bottom-[450%] -left-0 opacity-30 rotate-[45deg]" />

        <Heading size="lg" className="w-10/12 lg:w-1/2 leading-4 text-white md:text-7xl">
          <b className="text-pallete-primary">
            Política
          </b>
          {` de Privacidade`}
        </Heading>
        <p className="text-lg md:text-xl text-gray-400 w-10/12 lg:w-1/2">
          Esta Política de Privacidade descreve como o site Computação Amostra do CESUPA (doravante referido como "nós", "nosso" ou "site") coleta, usa e protege as informações pessoais dos usuários durante o processo de votação aberta, utilizando o serviço de autenticação OAuth do Google em conjunto com o NextAuth para obter o endereço de e-mail, foto de perfil e nome dos usuários, em conformidade com a Lei nº 13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais), doravante denominada de "LGPD".
        </p>
      </header>
      <div className="max-w-7xl mx-auto flex flex-col px-12 gap-20 pb-20">
        <PolicyContent title="Coleta de Informações">
          Para participar da votação aberta no site Computação Amostra, é necessário autenticar-se usando o serviço de autenticação OAuth do Google, em conjunto com o NextAuth. Durante o processo de autenticação, o Google e o NextAuth podem fornecer ao nosso site as seguintes informações pessoais do usuário: endereço de e-mail, foto de perfil e nome.
        </PolicyContent>
        <PolicyContent title="Uso das Informações">
          As informações pessoais coletadas durante o processo de autenticação
          com o Google e o NextAuth serão usadas exclusivamente para fins de
          identificação do usuário e para permitir a participação na votação
          aberta do site Computação Amostra, conforme a LGPD. Essas informações
          não serão compartilhadas com terceiros sem o consentimento prévio do
          usuário, a menos que exigido por lei.
        </PolicyContent>
        <PolicyContent title="Proteção das Informações">
          Nós implementamos medidas de segurança adequadas para proteger as
          informações pessoais dos usuários contra acesso não autorizado,
          divulgação, alteração ou destruição, conforme a LGPD. No entanto,
          nenhum sistema de segurança é completamente impenetrável, e não
          podemos garantir a segurança absoluta das informações pessoais dos
          usuários.
        </PolicyContent>
        <PolicyContent title="Cookies">
          Nosso site utiliza cookies para melhorar a experiência do usuário.
          Cookies são pequenos arquivos de texto armazenados no dispositivo do
          usuário que contêm informações sobre a navegação no site. Os cookies
          podem ser usados para lembrar as preferências do usuário, personalizar
          o conteúdo e fornecer análises sobre a utilização do site, conforme a
          LGPD. O usuário pode optar por desativar os cookies nas configurações
          do navegador, mas isso pode afetar a funcionalidade do site.
        </PolicyContent>
        <PolicyContent title="Links Externos">
          Nosso site pode conter links para sites de terceiros. Não nos
          responsabilizamos pelas práticas de privacidade ou pelo conteúdo
          desses sites. Recomendamos que os usuários revisem as políticas de
          privacidade dos sites de terceiros antes de fornecerem qualquer
          informação pessoal, conforme a LGPD.
        </PolicyContent>
        <PolicyContent title="Alterações na Política de Privacidade">
          Podemos atualizar esta Política de Privacidade periodicamente para
          refletir mudanças em nossas práticas de coleta, uso e proteção de
          informações, conforme a LGPD. Recomendamos que os usuários revisem
          esta página regularmente para se manterem informados sobre as práticas
          de privacidade do nosso site.
        </PolicyContent>
        <PolicyContent title="Consentimento">
          Ao utilizar o serviço de autenticação OAuth do Google em conjunto com
          o NextAuth para participar da votação aberta no site Computação
          Amostra, o usuário concorda com a coleta, uso e proteção das
          informações pessoais de acordo com esta Política de Privacidade,
          conforme a LGPD. O usuário tem o direito de revogar seu consentimento
          a qualquer momento, entrando em contato conosco através dos meios de
          contato fornecidos no site.
        </PolicyContent>
        <PolicyContent title="Contato">
          Se o usuário tiver alguma dúvida, preocupação ou solicitação em
          relação a esta Política de Privacidade, ou ao uso de suas informações
          pessoais, ele pode entrar em contato conosco através dos seguintes
          meios:
        </PolicyContent>
        <div className="flex flex-col gap-7">
          <Contact label="E-mail" content="contato@computacao-amostra.com" icon={AiOutlineMail} />
          <Contact label="Telefone" content="+55 (91) 3205-9301" icon={AiOutlinePhone} />
          <Contact label="Localização" content="Av. Alcindo Cacela, 1523 - Umarizal, 66065-219, Belém, Pará, Brasil." icon={BsGeoAlt} />
        </div>
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