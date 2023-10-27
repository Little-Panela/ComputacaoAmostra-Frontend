/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "react-i18next";
import { Button } from "../../elements/Button";
import { Heading } from "../../elements/Heading";
import { ModalProject } from "../../modules/ModalProject";


// eslint-disable-next-line @next/next/no-img-element
export function PremioMMIB () { 
    const { t } = useTranslation("common");
    const AranduTeam = ["Bruna Melido", "Isadora Lacerda", "Ícaro Macedo"]
      

    return (
        <section className="w-full flex flex-col justify-center items-center h-fit box-border pt-7 pb-7 bg-cover no-repeat bg-center lg:pb-56 lg:pt-56 lg:bg-mmib-desktop">
            
            <div className="w-full h-fit relative lg:hidden">
                <div className="bg-mmib-mobile bg-no-repeat bg-cover items-center justify-center w-full h-full absolute"></div>
                <img src="/static/img/mmibmobile.png"
                alt="Equipe Arandu"
                className="flex items-center justify-center w-full h-auto lg:hidden"
                />
                <div className="flex flex-col gap-20 justify-center items-center transform -translate-y-24 lg:hidden">
                {/* div texto */}
                <div className="flex flex-col gap-4 justify-center items-center">
                    <div className="flex border-b-2  border-pallete-primary">
                        <Heading size="xl">{t("awardMMIB.award")}</Heading>
                    </div>
                    <p className="flex flex-wrap max-w-[60%] text-center">{t("awardMMIB.mainText")}</p>
                </div>
                <img
                src="/static/img/Arandu.svg"
                alt="Logo Arandu"
                className="h-auto flex w-auto"
                />
                <ModalProject
                    name={t("winners-att.2023.bcc.thirdPlace.title")}
                    nameForSlug={t("winners-att.2023.bcc.thirdPlace.title")}
                    description={t("winners-att.2023.bcc.thirdPlace.modalDescription")}
                    teamMembers={AranduTeam}
                    isWinner={true}
                    isZenith={false}
                    isPublicVote={true}
                    videoId={t("winners-att.2023.bcc.thirdPlace.youtubeId")}
                    course={"ecomp"}
                     trigger={
                        <Button className="block w-fit rounded-2xl border-[1px] border-pallete-primary bg-transparent py-3 text-sm font-bold text-white">
                            {t("home.winners.details")}
                        </Button>
                     }
                    />
                </div>
            </div>

            {/* div principal desktop */}
            <div className="hidden lg:flex lg:flex-row lg:justify-between lg:pl-24 lg:pr-24 lg:w-full lg:max-w-screen-2xl">
                <div className="flex flex-col gap-12 justify-center items-start z-10">
                    <div className="flex border-b-2  border-pallete-primary">
                        <Heading size="2xl">{t("awardMMIB.award")}</Heading>
                    </div>
                    <p className="flex max-w-[80%] flex-wrap text-left">{t("awardMMIB.mainText")}</p>
                    <ModalProject
                    name={t("winners-att.2023.bcc.thirdPlace.title")}
                    nameForSlug={t("winners-att.2023.bcc.thirdPlace.title")}
                    description={t("winners-att.2023.bcc.thirdPlace.modalDescription")}
                    teamMembers={AranduTeam}
                    isWinner={true}
                    isZenith={false}
                    isPublicVote={true}
                    videoId={t("winners-att.2023.bcc.thirdPlace.youtubeId")}
                    course={"ecomp"}
                     trigger={
                        <Button className="block w-fit rounded-2xl border-[1px] border-pallete-primary bg-transparent py-3 text-sm font-bold text-white">
                            {t("home.winners.details")}
                        </Button>
                     }
                    />
                </div>
                <img
                src="/static/img/ARANDU.svg"
                alt="Logo Arandu"
                className="h-auto flex w-96"
                />
            </div>
        </section>
    )
}