/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import type { TProject } from "../../@types/TProject";
import { NormalizeTextToSlug } from "../../helpers/normalize-text-to-slug";

import { Text } from "../elements/Text";
import { Heading } from "../elements/Heading";
import { Button } from "../elements/Button";
import { ModalProject } from "./ModalProject";

import { env } from "../../env.mjs";
const cdnUrl = env.NEXT_PUBLIC_CDN_URL;

type CardProjectProps = TProject;
type NormalCardProps = {
  logoUrl?: string;
  teamName: string;
};

const LogoCard = ({ teamName }: NormalCardProps) => {
  const getFirstLetter = (word: string) => word[0];

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-pallete-primary-dark group-hover:h-16 group-hover:w-16 sm:h-40 sm:w-40 group-hover:sm:h-28 group-hover:sm:w-28">
      <p className="font-montserrat text-6xl font-bold text-white shadow-black drop-shadow-lg group-hover:text-4xl sm:text-8xl group-hover:sm:text-6xl">
        {getFirstLetter(teamName)}
      </p>
    </div>
  );
};

export function CardProject({
  id,
  name,
  description,
  team,
  links,
  course,
}: CardProjectProps) {
  const router = useRouter();
  const locale = router.locale ?? "pt";
  const { t } = useTranslation("common");
  const nameForSlug = NormalizeTextToSlug({ text: name });

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <>
      <div className="group relative flex h-72 w-40 flex-col items-center gap-10 rounded-lg border-4 border-pallete-primary bg-black bg-opacity-40 px-4 py-10 hover:gap-6 hover:py-4 sm:h-[430px] sm:w-64 sm:px-8 sm:py-20">
        <div className="flex h-full w-full animate-card-show flex-col items-center gap-10 opacity-100 group-hover:hidden group-hover:opacity-0">
          {links.banner ? (
            <Image
              alt={name}
              src={cdnUrl + links.banner}
              className="h-24 w-24 rounded-full bg-no-repeat object-cover sm:h-40 sm:w-40"
              width={160}
              height={160}
              quality={100}
            />
          ) : (
            <LogoCard teamName={name} />
          )}
          <Heading className="break-all text-center text-xl text-white sm:text-2xl">
            {name}
          </Heading>
        </div>
        <div className="hidden h-full w-full animate-card-show flex-col items-center gap-3 group-hover:flex sm:gap-6">
          {links.banner ? (
            <Image
            alt={name}
            src={cdnUrl + links.banner}
            className="h-16 w-16 rounded-full bg-no-repeat object-cover sm:h-28 sm:w-28"
            width={112}
            height={112}
            quality={100}
          />
          ) : (
            <LogoCard teamName={name} />
          )}
          <Heading className="break-all text-xl text-white sm:text-2xl">
            {name}
          </Heading>
          <Text className="flex-1 overflow-y-hidden text-xs font-bold text-white sm:text-sm">
            {truncate(description, 120)}
          </Text>
          <ModalProject
            id={id}
            name={name}
            nameForSlug={nameForSlug}
            description={description}
            githubLink={links.github}
            teamMembers={team}
            // @ts-expect-error - locale exists
            videoId={links.youtube[locale]}
            course={course}
            trigger={
              <Button className="block w-full rounded-2xl border-[1px] border-pallete-primary bg-transparent py-3 text-sm font-bold text-white">
                {t("voting.gallery.card.details")}
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
}
