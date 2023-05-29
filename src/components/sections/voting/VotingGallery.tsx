/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { CardProject } from "../../modules/CardProject";
import { CardProjectSkeleton } from "../../modules/CardProjectSkeleton";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";

import type { TProject } from "../../../@types/TProject";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const locale = router.locale ?? "pt";

  return (
    <section className="relative mx-5 py-20 pb-40 mt-12 flex flex-col items-center gap-6 md:mt-8 md:gap-16">
      <img src="/static/img/video-wave.png" alt="Onda da Direita" className="absolute h-[600px] xl:h-[800px] top-[-100px] -right-10 opacity-20 rotate-[-135deg] z-[0]" />
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -top-[150px] -left-20 opacity-20 -rotate-[270deg] z-[0]" />
      {!isLoading ? (
        projects && projects.length > 0 ? (
          <div className="grid w-full justify-center grid-cols-project-cards sm:grid-cols-project-cards-md gap-6 px-5 max-md:px-1 md:gap-16 md:px-16 z-10">
            {projects.map((project) => (
              <CardProject
                key={project.id}
                id={project.id}
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
            <div className="bg-transparent flex items-center justify-center w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border-pallete-primary border-[4px]">
              <a className="font-bold translate-x-[6px] text-center justify-center items-center text-pallete-primary text-5xl md:text-7xl rotate-90">:(</a>
            </div>
            <Text className="md:text-2xl box-border pt-3 md:pt-6 text-lg font-montserrat font-semibold text-pallete-primary">
              {t("voting.gallery.noProjects")} <a className="text-white">{t("voting.gallery.afterProjects")}</a>
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
