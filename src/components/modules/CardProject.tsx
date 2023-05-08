import Link from "next/link";
import type { TProject } from "../../@types/TProject";
import { Text } from "../elements/Text";
import { NormalizeTextToSlug } from "../helpers/normalize-text-to-slug";
import { ModalProject } from "./ModalProject";

type CardProjectProps = TProject

export function CardProject({
  name,
  description,
  team,
  links,
  course,
}: CardProjectProps) {
  const nameForSlug = NormalizeTextToSlug({ text: name });

  return (
    <ModalProject
      name={name}
      nameForSlug={nameForSlug}
      description={description}
      githubLink={links.github}
      teamMembers={team}
      // TODO: DINÂMICO COM A ROTA
      videoId={links.youtube.en}
      course={course}
      trigger={
        <Link
          href={`/voting?course=${course}`}
          as={`/project/${nameForSlug}`}
          scroll={false}
        >
          <div className="group flex flex-col gap-3 rounded-md border border-solid border-gray-800 p-6 shadow-lg transition-shadow hover:shadow-xl">
            <Text asChild size="md" className="md:text-2xl">
              <strong>{name}</strong>
            </Text>
            <Text className="text-xs md:text-lg">{description}</Text>
            <button className="flex-1 rounded-md border border-green-400 px-3 py-1 text-green-400 transition-colors group-hover:border-green-600 group-hover:text-green-600">
              Ver detalhes
            </button>
          </div>
        </Link>
      }
    />
  );
}
