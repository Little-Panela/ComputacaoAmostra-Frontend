import { CardWinner } from "../../modules/CardWinner";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { Button } from "../../elements/Button";

/* eslint-disable @next/next/no-img-element */
export function Winners() {
  return (
    <section className="py-20 bg-winner-linear bg-no-repeat bg-cover flex flex-col items-center relative z-10 mx-auto max-w-4xl px-2 pb-20 sm:px-6 lg:px-8">
      <Heading size="xl" className="border-b-4 border-pallete-primary pb-2 w-fit text-3xl text-center mb-5">
        Vencedores
      </Heading>
      <div className="mb-8 relative w-0 h-20 border-[1px] border-pallete-primary border-dashed after:content-[''] after:h-2 after:w-2 after:absolute after:bg-pallete-primary after:rounded-full after:bottom-0 after:translate-y-1/2 after:-translate-x-1/2">
      </div>
      <Heading size="xl" className="mb-4 text-3xl text-bold">
        2022
      </Heading>
      <div className="flex flex-col gap-5 items-center mb-8">
        <Text className="font-bold">
          Engenharia de Computação
        </Text>
        <div className="flex flex-col gap-5">
          <CardWinner course="ECOMP" position={1} title="Projeto Falken" />
          <CardWinner course="ECOMP" position={2} title="Projeto Falken" />
          <CardWinner course="ECOMP" position={3} title="Projeto Falken" />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mb-5">
        <Text className="font-bold">
          Ciência de Computação
        </Text>
        <div className="flex flex-col gap-5">
          <CardWinner course="BCC" position={1} title="Projeto Falken" />
          <CardWinner course="BCC" position={2} title="Projeto Falken" />
          <CardWinner course="BCC" position={3} title="Projeto Falken" />
        </div>
      </div>
      <div className="mb-8 relative w-0 h-20 border-[1px] border-pallete-primary border-dashed before:content-[''] before:h-2 before:w-2 before:absolute before:bg-pallete-primary before:rounded-full before:top-0 before:-translate-y-1/2 before:-translate-x-1/2 after:content-[''] after:h-2 after:w-2 after:absolute after:bg-pallete-primary after:rounded-full after:bottom-0 after:translate-y-1/2 after:-translate-x-1/2">
      </div>
      <Heading size="xl" className="border-b-4 border-pallete-primary pb-2 w-fit text-3xl text-center mb-5"> 
        2023
      </Heading>
      <div className="flex flex-col rounded-lg px-4 py-5 gap-3 w-11/12 items-center border-2 border-pallete-primary">
        <img src="/static/img/voting-trophy.svg" alt="Trophy" className="w-40 h-40" />
        <Text>
          Você ainda pode ajudar a escrever essa história:
        </Text>
        <Text className="text-xs text-gray-400">
          Defina o próximo vencedor
        </Text>
        <Button>Votar</Button>
      </div>
    </section>
  );
}
