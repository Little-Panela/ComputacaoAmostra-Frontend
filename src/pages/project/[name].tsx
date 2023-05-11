import { QueryClient } from "@tanstack/react-query";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import type { TProject } from "../../@types/TProject";
import { NormalizeTextToSearch } from "../../components/helpers/normalize-text-to-search";
import { NormalizeTextToSlug } from "../../components/helpers/normalize-text-to-slug";
import { Default } from "../../components/layouts/Default";
import { getProject } from "../../services/get-project";
import { getProjects } from "../../services/get-projects";

interface TicketPageProps {
  project: TProject;
}

export default function ProjectPage({ project }: TicketPageProps) {4
  if (!project) {
    return (
      <Default title="Projeto não encontrado">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Projeto não encontrado
          </h1>
        </div>
      </Default>
    );
  }

  return (
    <Default
      title={project.name}
      description={project.description}
      path={`/project/${project.name}`}
      banner={project.links?.banner}
    >
      {project.name}
    </Default>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const project = await getProject({ name: String(params.name) });

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
