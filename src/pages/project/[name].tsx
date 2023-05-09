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

export default function ProjectPage({ project }: TicketPageProps) {
  return (
    <>
      <Head>
        <meta property="og:image:secure_url" content={project.links.banner} />
        <meta name="twitter:image" content={project.links.banner} />
        <meta name="twitter:image:src" content={project.links.banner} />
        <meta name="twitter:title" content={project.name} />
        <meta name="twitter:image:alt" content={project.name} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <Default
        title={project.name}
        description={project.description}
        path={`/project/${project.name}`}
        banner={project.links.banner}
      >
        {project.name}
      </Default>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const formattedName = String(params!.name);
  // const project = await getProject({ name: formattedName });

  const project = {
    id: "df59265b-18fd-42c9-88e2-7ad88640fe36",
    name: "Ecorota - ECOMP",
    description:
      "Projeto criado para teste da plataforma de votos, mas que foi baseado num projeto muito legal :o",
    team: [
      "Fabio Neves",
      "João Cardoso",
      "Marco Aurélio",
      "João Guilherme",
      "Luiz Andre",
    ],
    // totalVotes: 0,
    // uniqueVotes: 0,
    // status: true,
    links: {
      github: "https://github.com/JoaoCardoso00/Eco-Rota",
      youtube: { en: "twYBXcmGcag", pt: "twYBXcmGcag" },
      banner: "https://www.ecorota.com/img/seo_2.webp",
    },
    course: "ecomp",
    // votes: [],
  };

  return {
    props: {
      project,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

// export async function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     };
//   }

//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts');
//   const posts = await res.json();

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }));

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false };
// }

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   // const course = ctx.params?.course as "bcc" | "ecomp";
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery<TProject>([
//     "getProjects",
//     getProjects({ filter: course }),
//   ]);

//    // params contains the post 'id'. On the off chance that
//     // the course resembles/posts/1, params.id is 1

//     // const res = anticipate fetch('https://.../posts/${params.id}')

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
