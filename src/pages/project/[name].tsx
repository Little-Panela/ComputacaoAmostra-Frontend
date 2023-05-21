/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @next/next/no-img-element */
import { createRef, useEffect } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { UsersIcon } from "@heroicons/react/24/outline";
import { signIn, useSession } from "next-auth/react";
import ReCAPTCHA from "react-google-recaptcha";
import { useMutation } from "@tanstack/react-query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Default } from "../../components/layouts/Default";
import { Text } from "../../components/elements/Text";
import { Button } from "../../components/elements/Button";
import { Heading } from "../../components/elements/Heading";
const Player = dynamic(() => import("../../components/elements/Player"), {
  ssr: false,
});

import { getProject } from "../../services/get-project";
import { postVote } from "../../services/post-vote";
import type { postVoteType } from "../../services/post-vote";

import type { TProject } from "../../@types/TProject";
import { env } from "../../env.mjs";
import ToastComponent from "../../components/elements/ToastComponent";

interface ProjectPageProps {
  project: TProject;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const locale = router.locale ?? "pt";
  const { t } = useTranslation("common");
  const recaptchaRef = createRef<ReCAPTCHA>();

  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();
  const isVotingEnd =
    new Date().getTime() > new Date(env.NEXT_PUBLIC_VOTING_END_DATE).getTime();
  const isUserLoggedIn = session !== null;

  const shareUrl = `${env.NEXT_PUBLIC_APP_URL}${router.asPath}`;
  const shareMessage = encodeURIComponent(
    `Vote em ${project.name} como o melhor projeto da Computação Amostra 2023!\n\n${shareUrl}`
  );
  const twitterShareMessage = encodeURIComponent(
    `Vote em ${project.name} como o melhor projeto da Computação Amostra 2023!`
  );

  const { mutateAsync: voteProject, isLoading: isLoadingVoting } = useMutation(
    async ({ captcha, projectId }: postVoteType) => {
      await postVote({ captcha, projectId });
    }
  );

  const handleVote = () => {
    if (!isVotingStarted || isVotingEnd || !isUserLoggedIn || isLoadingVoting) {
      toast.error(t("voting.modal.alertMessages.error"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    }

    recaptchaRef.current?.execute();
  };

  const onReCAPTCHAChange = async (captchaCode: string | null) => {
    if (!captchaCode) {
      recaptchaRef.current?.reset();
      toast.error(t("voting.modal.alertMessages.error"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return;
    }

    try {
      await voteProject({
        projectId: `${project.id}`,
        captcha: `${captchaCode}`,
      });

      toast.success(t("voting.modal.alertMessages.success"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(t("voting.modal.alertMessages.error"), {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    recaptchaRef.current?.reset();
  };

  useEffect(() => {
    if (!isVotingStarted) {
      void router.push("/voting/countdown");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Default
      title={project.name}
      description={project.description}
      path={`/project/${project.name}`}
      banner={project.links.banner ?? ""}
    >
      <div className="mt-5 flex flex-col gap-9 px-6 max-sm:gap-2 md:mt-14 min-[1300px]:px-72">
        <div className="flex gap-3 self-center">
          <Heading size="2xl" className="text-gray-950">
            {project.name}
          </Heading>
        </div>
        <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-voting-cards">
          <div className="w-full">
            <div className="flex flex-col gap-4 md:max-w-[25rem] ">
              <Text className="flex items-center gap-2 text-gray-600" size="lg">
                <UsersIcon className="h-6 w-6" /> {project.team.toString()}.
              </Text>
              <Text size="xl" className="max-w-full break-words">
                {project.description}
              </Text>
              <Link
                href={project.links.github}
                className="w-fit rounded-full p-2 transition-colors hover:bg-gray-100"
              >
                <Image
                  src="/static/icons/github.svg"
                  className="hover:text-gray-400"
                  height={36}
                  width={36}
                  alt="Logo do github"
                />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Text className="text-gray-600" size="lg">
                {t("voting.modal.share")}:
              </Text>
              <a
                href={`https://wa.me/?text=${shareMessage}`}
                className="bg-brand-500 hover:bg-brand-300 flex h-[60px] items-center justify-center rounded"
              >
                <img
                  src="/static/icons/whatsapp.svg"
                  alt="Compartilhar no WhatsApp"
                />
              </a>
              <a
                href={`http://twitter.com/share?text=${twitterShareMessage}&url=${shareUrl}`}
                className="bg-brand-500 hover:bg-brand-300 flex h-[60px] items-center justify-center rounded"
              >
                <img
                  src="/static/icons/twitter.svg"
                  alt="Compartilhar no Twitter"
                />
              </a>

              <a
                href={`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${twitterShareMessage}`}
                className="bg-brand-500 hover:bg-brand-300 flex h-[60px] items-center justify-center rounded"
              >
                <img
                  src="/static/icons/facebook.svg"
                  alt="Compartilhar no Facebook"
                />
              </a>
            </div>
          </div>
          {isVotingEnd ? (
            <div />
          ) : isUserLoggedIn ? (
            <div className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl px-4 py-8">
              <ReCAPTCHA
                ref={recaptchaRef}
                hl="pt-BR"
                size="invisible"
                sitekey={env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
                onChange={onReCAPTCHAChange}
                badge="inline"
              />
              <Button
                onClick={handleVote}
                disabled={isLoadingVoting}
                className={
                  isLoadingVoting
                    ? "cursor-wait items-center justify-center bg-green-300 hover:bg-green-300"
                    : "cursor-pointer"
                }
              >
                {isLoadingVoting
                  ? t("voting.modal.loading")
                  : t("voting.modal.vote")}
              </Button>
              <ToastComponent />
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl px-4 py-8 md:max-w-[24rem]">
              <div>{t("voting.modal.signMensage")}</div>
              <Button onClick={() => signIn("google")}>
                {t("voting.modal.signIn")}
              </Button>
            </div>
          )}
        </div>
        {/* @ts-expect-error - locale exists */}
        <Player videoId={project.links.youtube[locale]} />
      </div>
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

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  if (!params || !locale) {
    return {
      notFound: true,
    };
  }

  const project = await getProject({ name: String(params.name) });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
        "pt",
        "en",
      ])),
      project,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
