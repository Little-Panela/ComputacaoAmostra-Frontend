/* eslint-disable @next/next/no-img-element */
export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col items-center py-10">
        <h1 className="text-2xl font-bold md:text-3xl">
          Empreendedoras da Amazônia
        </h1>
        <span className="text-center text-xl">
          Construindo Tecnologias Sustentáveis e Criativas para o movimento de
          Mulheres das ilhas de belém (Ilha de cotijuba).
        </span>
      </div>
      <div className="flex flex-wrap justify-center md:py-6">
        <img
          src="/img/island.svg"
          alt="island picture"
          className="h-auto w-full max-w-xl"
        />
        <p className="max-w-xl text-2xl">
          Universitários elaboram projetos sustentáveis para a Ilha das Onças e
          sua comunidade ribeirinha. Amazon Hacking surgiu da união dos cursos
          de Ciência da Computação e Engenharia da Computação do Cesupa, da
          parceria das empresas socialmente responsáveis e sustentáveis, como
          Paladar Amazônico, byAmazonian, Jambu Tecnologia e OnDrone, e também
          da Associação das Empresas Paraenses de Software e TIC - ParaTIC e da
          organização não governamental Instituto Jovem Exportador.
        </p>
      </div>
    </section>
  );
}
