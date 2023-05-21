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
import { UsersIcon } from "@heroicons/react/24/outline";
const Player = dynamic(() => import("../elements/Player"), {
  ssr: false,
});

import { postVote } from "../../services/post-vote";

import type { postVoteType } from "../../services/post-vote";
import { env } from "../../env.mjs";

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
        theme: "light"
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
    <Modal trigger={trigger} title={name} course={course} closeButton {...rest}>
      <>
        <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-voting-cards">
          <div className="w-full">
            <div className="flex flex-col gap-4 md:max-w-[25rem] ">
              <Text className="flex items-center gap-2 text-gray-600" size="lg">
                <UsersIcon className="h-6 w-6" /> {teamMembers.toString()}.
              </Text>
              <Text size="xl" className="max-w-full break-words">
                {description}
              </Text>
              <Link
                href={githubLink}
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
              <Button onClick={handleVote}>{t("voting.modal.vote")}</Button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-between gap-5 rounded-2xl px-4 py-8 md:max-w-[24rem]">
              <div>{t("voting.modal.signMensage")}</div>
              <Button
                onClick={() => signIn("google")}
              >
                {t("voting.modal.signIn")}
              </Button>
            </div>
          )}
        </div>
        <Player videoId={videoId} />
      </>
    </Modal>
  );
}
