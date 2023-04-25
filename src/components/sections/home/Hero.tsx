import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";

/* eslint-disable @next/next/no-img-element */
export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center py-10">
        <Heading size="sm" className="text-base md:text-4xl">Empreendedoras da Amazônia</Heading>
        <Text size="sm" className="md:text-2xl">
          Construindo Tecnologias Sustentáveis e Criativas para o movimento de
          Mulheres das ilhas de belém &#40;Ilha de cotijuba&#41;.
        </Text>
      </div>
      <div className="flex flex-wrap justify-center md:py-6">
        <img
          src="/static/img/island.svg"
          alt="island picture"
          className="h-auto w-full max-w-xl"
        />
        <Text size="sm" className="md:text-2xl max-w-xl">
          Universitários elaboram projetos sustentáveis para a Ilha das Onças e
          sua comunidade ribeirinha. Amazon Hacking surgiu da união dos cursos
          de Ciência da Computação e Engenharia da Computação do Cesupa, da
          parceria das empresas socialmente responsáveis e sustentáveis, como
          Paladar Amazônico, byAmazonian, Jambu Tecnologia e OnDrone, e também
          da Associação das Empresas Paraenses de Software e TIC - ParaTIC e da
          organização não governamental Instituto Jovem Exportador.
        </Text>
      </div>
    </section>
  );
}
