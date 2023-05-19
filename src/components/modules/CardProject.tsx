/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { NormalizeTextToSlug } from "../../helpers/normalize-text-to-slug";

import { ModalProject } from "./ModalProject";
import { Text } from "../elements/Text";
import Image from "next/image";

import type { TProject } from "../../@types/TProject";
import { Heading } from "../elements/Heading";
import { Button } from "../elements/Button";

type CardProjectProps = TProject;
type NormalCardProps = {
  logoUrl?: string,
  teamName: string
}

const LogoCard = ({ teamName }: NormalCardProps) => {
  const getFirstLetter = (word: string) => word[0]

  return (
    <div className="flex justify-center items-center bg-pallete-primary w-40 h-40 rounded-full group-hover:w-28 group-hover:h-28">
      <p className='drop-shadow-lg shadow-black text-8xl group-hover:text-6xl font-bold text-white'>
        {getFirstLetter(teamName)}
      </p>
    </div>
  )
}

export function CardProject({
  id,
  name,
  description,
  team,
  links,
  course,
  logoUrl
}: CardProjectProps) {
  const router = useRouter();
  const locale = router.locale ?? "pt";
  const { t } = useTranslation("common");
  const nameForSlug = NormalizeTextToSlug({ text: name });

  const truncate = (str: string, n: number) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <>
      <div className='py-20 hover:py-8 px-8 bg-black rounded-lg border-pallete-secondary border-4 flex flex-col items-center relative group w-64 h-[430px] gap-10 hover:gap-6'>
        <div className='flex gap-10 group-hover:hidden animate-card-show flex-col items-center opacity-100 h-full w-full group-hover:opacity-0'>
          {logoUrl ? <Image alt={name} src={logoUrl} className='w-44 h-44' /> : <LogoCard teamName={name} />}
          <Heading size="lg" className='break-all text-white'>
            {name}
          </Heading>
        </div>
        <div className='hidden group-hover:flex flex-col gap-6 items-center animate-card-show h-full w-full'>
          {logoUrl ? <Image alt={name} src={logoUrl} className='w-28 h-28' /> : <LogoCard teamName={name} />}
          <Heading size="lg" className='break-all text-white'>
            {name}
          </Heading>
          <p className='text-sm font-bold flex-1 overflow-y-hidden text-white'>
            {truncate(description, 120)}
          </p>
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
              <Button className='text-white bg-transparent block w-full border-[1px] py-3 rounded-2xl border-pallete-primary text-sm font-bold'>
                <Link
                  href={`/voting?course=${course}`}
                  as={`/project/${nameForSlug}`}
                  scroll={false}
                  className="cursor-default"
                >
                  {t("voting.gallery.card.details")}
                </Link>
              </Button>
            } />

        </div>
      </div>
      <ToastContainer />
    </>
  );
}
