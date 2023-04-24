/* eslint-disable @next/next/no-img-element */
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { CardProject } from "../../modules/CardProject";

export function VotingGallery() {
  return (
    <section className="mx-auto mt-6 flex flex-col items-center gap-6 overflow-hidden  md:mt-16 md:gap-16">
      <div className="mx-2 flex flex-col text-center md:items-center">
        <Heading size="sm" className="md:text-3xl">
          Quem você quer que vença a computação amostra 2023?
        </Heading>
        <Text className="text-xs text-gray-500 md:text-2xl">
          Vote para definir o melhor projeto!!
        </Text>
      </div>

      <div className="grid w-full grid-cols-project-cards gap-6 px-5 md:gap-16 md:px-16 max-md:px-1">
        <CardProject
          name="Projeto 1"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CardProject
          name="Projeto 1"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CardProject
          name="Projeto 1"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CardProject
          name="Projeto 1"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <CardProject
          name="Projeto 1"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
}
