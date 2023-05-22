/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { CardProject } from "../../modules/CardProject";
import { CardProjectSkeleton } from "../../modules/CardProjectSkeleton";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";

import type { TProject } from "../../../@types/TProject";

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
  const { t } = useTranslation("common");

  return (
    <section className="relative mx-5 py-20 pb-40 mt-12 flex flex-col items-center gap-6 md:mt-8 md:gap-16">
      <img src="/static/img/video-wave.png" alt="Onda da Direita" className="absolute h-[600px] xl:h-[800px] top-40 -right-10 opacity-20 rotate-[-135deg] z-[2]" />
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -top-20 -left-20 opacity-20 -rotate-[270deg] z-[2]" />

      {!isLoading ? (
        projects && projects.length > 0 ? (
          <div className="grid w-full grid-cols-project-cards sm:grid-cols-project-cards-md gap-6 px-5 max-md:px-1 md:gap-16 md:px-16 z-10">
            {projects.map((project) => (
              <CardProject
                key={project.id}
                name={project.name}
                description={project.description}
                links={project.links}
                team={project.team}
                // @ts-expect-error - bcc and ecomp strings are valid
                course={course}
              />
            ))}
          </div>
        ) : (
          <div className="min-w-screen flex flex-col gap-4 items-center justify-center">
            <XMarkIcon className="w-16 h-16 text-gray-500" />
            <Text className="text-2xl text-gray-500">
              {t("voting.gallery.noProjects")}
            </Text>
          </div>
        )
      ) : (
        <div className="grid w-full grid-cols-project-cards sm:grid-cols-project-cards-md gap-6 px-5 max-md:px-1 md:gap-16 md:px-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <CardProjectSkeleton key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
