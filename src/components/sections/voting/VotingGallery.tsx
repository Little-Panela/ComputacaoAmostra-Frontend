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
    <section className="mx-5 mt-12 flex flex-col items-center gap-6 overflow-hidden md:mt-16 md:gap-16">
      {!isLoading ? (
        projects && projects.length > 0 ? (
          <div className="w-full flex flex-wrap justify-center gap-y-3 gap-x-4 md:gap-y-5">
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
        <div className="grid w-full grid-cols-project-cards gap-6 px-5 max-md:px-1 md:gap-16 md:px-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <CardProjectSkeleton key={index} />
          ))}
        </div>
      )}
    </section>
  );
}
