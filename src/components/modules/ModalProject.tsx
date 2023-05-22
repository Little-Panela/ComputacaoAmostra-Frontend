/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @next/next/no-img-element */
import { createRef } from "react";
import type { ModalProps } from "../elements/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";

import { Modal } from "../elements/Modal";
import { Text } from "../elements/Text";
import { Button } from "../elements/Button";
const Player = dynamic(() => import("../elements/Player"), {
  ssr: false,
});

import { postVote } from "../../services/post-vote";

import type { postVoteType } from "../../services/post-vote";
import { env } from "../../env.mjs";
import { Heading } from "../elements/Heading";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

type ModalProjectProps = {
  id: string;
  name: string;
  nameForSlug: string;
  videoId: string;
  teamMembers: string[];
  githubLink: string;
  description: string;
  course: "bcc" | "ecomp";
} & Omit<ModalProps, "children">;

export function ModalProject({
  trigger,
  id,
  name,
  nameForSlug,
  teamMembers,
  description,
  videoId,
  githubLink,
  course,
  ...rest
}: ModalProjectProps) {
  const { data: session } = useSession();
  const { t } = useTranslation("common");
  const recaptchaRef = createRef<ReCAPTCHA>();

  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();
  const isVotingEnd = new Date() > new Date(env.NEXT_PUBLIC_VOTING_END_DATE);
  const isUserLoggedIn = session !== null;

  const shareUrl = `${env.NEXT_PUBLIC_APP_URL}/project/${nameForSlug}`;
  const shareMessage = encodeURIComponent(
    `Vote em ${name} como o melhor projeto da Computação Amostra 2023!\n\n${shareUrl}`
  );
  const twitterShareMessage = encodeURIComponent(
    `Vote em ${name} como o melhor projeto da Computação Amostra 2023!`
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
        projectId: `${id}`,
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

  return (
    <Modal
      githubLink={githubLink}
      trigger={trigger}
      course={course}
      closeButton
      {...rest}
    >
      <>
        <div className="bg-modal-radial-gradient">
          <div className="relative px-[104px] mt-20 flex w-full items-center justify-center gap-5 border-b-2 border-pallete-primary-light pb-12">
            <Link
              href={githubLink}
              className="w-fit cursor-pointer rounded-full p-2 transition-all hover:first:scale-125 sm:absolute sm:left-10"
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
              <Heading size="2xl" className="text-white">
                {name.split("-")[0]}
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
                    {teamMembers.map((member, id) => {
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
                    <Text size="sm">{description}</Text>
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
                  <Player videoId={videoId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
}
