/* eslint-disable @next/next/no-img-element */
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { TProject } from "../../../@types/TProject";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { CardProject } from "../../modules/CardProject";
import { CardProjectSkeleton } from "../../modules/CardProjectSkeleton";

type VotingGalleryProps = {
  projects?: TProject[];
  course: "bcc" | "ecomp";
  isLoading: boolean;
};

export function VotingGallery({
  projects,
  course,
  isLoading,
}: VotingGalleryProps) {
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

      {!isLoading ? (
        projects && projects.length > 0 ? (
          <div className="grid w-full grid-cols-project-cards gap-6 px-5 max-md:px-1 md:gap-16 md:px-16">
            {projects.map((project) => (
              <CardProject
                key={project.id}
                name={project.name}
                description={project.description}
                youtube={project.youtube}
                github={project.github}
                team={project.team}
                course={course}
              />
            ))}
          </div>
        ) : (
          <div className="min-w-screen flex flex-col gap-4 items-center justify-center">
            <XMarkIcon className="w-16 h-16 text-gray-500" />
            <Text className="text-2xl text-gray-500">
              Nenhum projeto encontrado
            </Text>
          </div>
        )
      ) : (
        <div className="grid w-full grid-cols-project-cards gap-6 px-5 max-md:px-1 md:gap-16 md:px-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <CardProjectSkeleton key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
