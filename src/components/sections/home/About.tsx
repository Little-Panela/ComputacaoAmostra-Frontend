import { Heading } from "../../elements/Heading"

export function About() {
  return (
    <section className="bg-[url('/static/img/about-bg.png')] bg-cover bg-center bg-no-repeat px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* <h1 className="pt-9 text-center text-3xl font-bold text-white">
          Sobre
        </h1> */}
        <Heading size="lg" className="md:text-4xl pt-9 text-center text-white">
          Sobre
        </Heading>

        <div className="mx-auto my-6 h-[400px] w-full rounded-2xl bg-red-50"></div>

        <p className="text-xl text-white">
          A Estimular alunos do CESUPA ao desenvolvimento de novas tecnologias e
          soluções inovadoras, incentivando o desenvolvimento do pensar
          tecnológico, da criatividade e da economia do Estado do Pará. Promover
          o inter-relacionamento entre alunos e empresas de tecnologia do
          Estado, proporcionando panorama favorável a troca de experiências de
          mercado e soluções provindas do conhecimento acadêmico.A Computação
          Amostra será realizada no Centro Universitário do Estado do Pará
          (CESUPA), no período de 24 a 27 de maio de 2022. O evento é iniciativa
          dos Cursos de Computação do Centro Universitário do Pará - CESUPA, o
          qual objetiva divulgar ações e produtos inovadores de TI, focando o
          desenvolvimento científico e econômico da nossa região.
        </p>
      </div>
    </section>
  );
}
