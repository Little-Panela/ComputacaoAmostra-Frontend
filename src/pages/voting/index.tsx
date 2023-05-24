import { useQuery } from "@tanstack/react-query";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useMemo, useState } from "react";
import type { TProject } from "../../@types/TProject";
import { NormalizeTextToSearch } from "../../helpers/normalize-text-to-search";
import { Default } from "../../components/layouts/Default";
import { Header } from "../../components/sections/voting/Header";
import { VotingGallery } from "../../components/sections/voting/VotingGallery";
import { getProjects } from "../../services/get-projects";

import { env } from "../../env.mjs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";

const Voting: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const query = router.query as { course?: "bcc" | "ecomp" };
  const course = useMemo(() => query.course ?? "bcc", [query.course]);

  const [searchTerm, setSearchTerm] = useState("");

  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();

  const { data: projects, isLoading: isProjectsLoading } = useQuery<TProject[]>(
    ["projects", course],
    async () => {
      const response = await getProjects({ filter: course });
      return response;
    },
    {
      refetchOnWindowFocus: false,
      enabled: isVotingStarted,
    }
  );

  const filteredProjects = useMemo(() => {
    if (!projects) return [];
    if (!searchTerm || "") return projects.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return projects.filter((project) =>
      NormalizeTextToSearch(project.name).includes(
        NormalizeTextToSearch(searchTerm)
      )
    ).sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }, [projects, searchTerm]);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    if (!isVotingStarted) {
      void router.push("/voting/countdown");
    }

    console.log(projects)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Default
      title={t("voting.title") ?? "Votação"}
      description={
        (t("voting.description")) ?? "Quem você quer que vença a computação amostra"
      }
      path={`/voting?course=${course}`}
    >
      <Header course={course ?? "bcc"} onChangeText={handleSearch} />
      <VotingGallery
        projects={filteredProjects}
        course={course}
        isLoading={isProjectsLoading}
      />
    </Default>
  );
};

export default Voting;

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "pt",
      "en",
    ])),
  },
});
