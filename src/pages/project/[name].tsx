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
import { FaFacebook, FaSpinner, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface ProjectPageProps {
  project: TProject;
}

const cdnUrl = env.NEXT_PUBLIC_CDN_URL;

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
      banner={project.links.banner ? cdnUrl + project.links.banner : ""}
    >
      <div className="flex justify-center bg-modal-radial-gradient ">
        <div className="md:w-4/5">
          <div className="relative flex w-full flex-wrap items-center justify-center gap-5 border-b-2 border-pallete-primary-light px-[104px] pb-12 pt-12 sm:pt-0 min-[1401px]:flex-col">
            <Link
              href={project.links.github}
              className="w-fit cursor-pointer rounded-full p-2 transition-all hover:first:scale-125 sm:absolute sm:left-10 sm:top-7"
            >
              <Image
                src="/static/icons/github-white-logo.svg"
                className="text-white"
                height={64}
                width={64}
                alt="Logo do github"
              />
            </Link>
            <div className="relative flex flex-col self-center">
              <Heading size="2xl" className="text-white sm:pt-12">
                {project.name.split("-")[0]}
              </Heading>
              <div className="absolute bottom-[-10px] mt-2 h-[2px] w-full bg-pallete-primary-light" />
            </div>
          </div>

          <div className="bg-modal-radial-gradient">
            <div className="flex w-full flex-col items-center bg-black/50">
              <div className="flex w-full flex-col items-center justify-center px-20 sm:flex-row sm:justify-around sm:gap-32">
                {/* Equipe */}
                <div className="mt-10 flex w-max min-w-[200px] flex-col border-[1px] border-pallete-primary px-4 py-6 text-center sm:w-1/2 sm:items-start">
                  <Text
                    size="xl"
                    className="font-bold text-pallete-primary-light"
                  >
                    {t("voting.modal.team")}
                  </Text>
                  <ul className="mt-4 flex list-disc flex-col items-start">
                    {project.team.map((member, id) => {
                      return (
                        <Text
                          key={id}
                          className="flex items-center justify-center gap-1 font-montserrat text-white"
                          size="sm"
                        >
                          <div className="h-[5px] w-[5px] rounded-full bg-white" />
                          {member}
                        </Text>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex w-full flex-col items-start justify-center sm:w-1/2 sm:flex-row">
                  {/* Descrição */}
                  <div className="mt-20 flex w-full min-w-[200px] flex-col gap-8 sm:mt-0">
                    <div className="flex w-full flex-col items-center">
                      <div className="relative flex w-fit flex-col items-center">
                        <Heading size="md" className="text-white">
                          {t("voting.modal.description")}
                        </Heading>
                        <div className="absolute bottom-[-10px] mt-2 h-[2px] w-full bg-pallete-primary-light" />
                      </div>
                    </div>
                    <Text size="sm">{project.description}</Text>
                  </div>
                  <div className="flex w-full flex-col items-center justify-center sm:hidden">
                    {/* Mobile Compartilhar */}
                    <div className="mt-32 flex w-full min-w-[200px] flex-col items-center gap-5">
                      <Text size="xl" className="font-bold">
                        {t("voting.modal.share")}
                      </Text>
                      <div className="flex w-full items-center justify-center gap-5">
                        <a href={`https://wa.me/?text=${shareMessage}`}>
                          <FaWhatsapp
                            color="white"
                            size={36}
                            className="cursor-pointer transition-all hover:scale-125"
                          />
                        </a>
                        <a
                          href={`http://twitter.com/share?text=${twitterShareMessage}&url=${shareUrl}`}
                        >
                          <FaTwitter
                            color="white"
                            size={36}
                            className="cursor-pointer transition-all hover:scale-125"
                          />
                        </a>

                        <a
                          href={`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${twitterShareMessage}`}
                        >
                          <FaFacebook
                            color="white"
                            size={36}
                            className="cursor-pointer transition-all hover:scale-125"
                          />
                        </a>
                      </div>
                    </div>
                    {/* Captcha */}
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      hl="pt-BR"
                      size="invisible"
                      sitekey={env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
                      onChange={onReCAPTCHAChange}
                      badge="inline"
                      className="mt-16 sm:mt-0"
                    />
                    {/* Vote / Sigin */}
                    <div className="mb-10 mt-10">
                      {isVotingEnd ? (
                        <div />
                      ) : isUserLoggedIn ? (
                        <div className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl px-4 py-8">
                          <Button
                            onClick={handleVote}
                            disabled={isLoadingVoting}
                          >
                            {isLoadingVoting ? (
                              <FaSpinner className="h-5 w-8 animate-spin" />
                            ) : (
                              t("voting.modal.vote")
                            )}
                          </Button>
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
                  </div>
                </div>
              </div>
              <div className="hidden w-full items-center justify-around gap-32 px-20 sm:flex">
                {/* Desktop Compartilhar */}
                <div className="mt-32 flex w-1/2 min-w-[200px] flex-col items-center gap-5 sm:mt-0 sm:items-start">
                  <Text size="xl" className="font-bold">
                    {t("voting.modal.share")}
                  </Text>
                  <div className="flex w-full items-center justify-start gap-5">
                    <a href={`https://wa.me/?text=${shareMessage}`}>
                      <FaWhatsapp
                        color="white"
                        size={36}
                        className="cursor-pointer transition-all hover:scale-125"
                      />
                    </a>
                    <a
                      href={`http://twitter.com/share?text=${twitterShareMessage}&url=${shareUrl}`}
                    >
                      <FaTwitter
                        color="white"
                        size={36}
                        className="cursor-pointer transition-all hover:scale-125"
                      />
                    </a>

                    <a
                      href={`http://www.facebook.com/sharer/sharer.php?u=${shareUrl}&t=${twitterShareMessage}`}
                    >
                      <FaFacebook
                        color="white"
                        size={36}
                        className="cursor-pointer transition-all hover:scale-125"
                      />
                    </a>
                  </div>
                </div>
                {/* Captcha */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  hl="pt-BR"
                  size="invisible"
                  sitekey={env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}
                  onChange={onReCAPTCHAChange}
                  badge="inline"
                />
                {/* Vote / Sigin */}
                <div className="mb-10 mt-10 flex w-1/2">
                  {isVotingEnd ? (
                    <div />
                  ) : isUserLoggedIn ? (
                    <div className="flex w-full flex-col items-end justify-between gap-5 rounded-2xl px-4 py-8">
                      <Button onClick={handleVote}>
                        {t("voting.modal.vote")}
                      </Button>
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
              </div>
              <div className="flex w-full items-center justify-center border-2 border-pallete-primary">
                <div className="m-10 flex w-[80%] overflow-hidden rounded-lg border-2 border-pallete-primary sm:w-[90%]">
                  {/* @ts-expect-error - locale exists */}
                  <Player videoId={project.links.youtube[locale]} />
                </div>
              </div>
            </div>
          </div>
        </div>
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
