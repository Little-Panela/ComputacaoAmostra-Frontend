import { QueryClient } from "@tanstack/react-query";
import type { GetStaticProps, NextPage } from "next";

const Project: NextPage = () => {

  return (
    <div>
      <h1>Terms</h1>
    </div>
  );
}

export default Project;


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