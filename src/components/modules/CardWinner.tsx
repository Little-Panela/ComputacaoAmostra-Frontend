import type { IconType } from "react-icons"
import { Text } from "../elements/Text"
import { Button } from "../elements/Button"
import clsx from "clsx"
import { useTranslation } from "react-i18next"

type CardWinnerProps = {
    title: string,
    position: number,
    course: "BCC" | "ECOMP"
}

export function CardWinner({ title, position, course }: CardWinnerProps) {
    const { t } = useTranslation("common")

    return (
        <div className={clsx("z-10 relative w-[330px] md:w-[450px] flex bg-pallete-background-blue gap-5 rounded-lg border-[1px] border-pallete-primary px-4 py-6", course === "ECOMP" && "xl:after:content-[''] xl:after:absolute xl:after:rounded-full xl:after:right-0 xl:after:top-1/2 xl:after:-translate-y-1/2 xl:after:translate-x-[120%] xl:after:w-2 xl:after:h-2 xl:after:bg-pallete-primary", course === "BCC" && "xl:before:content-[''] xl:before:absolute xl:before:rounded-full xl:before:left-0 xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:-translate-x-[120%] xl:before:w-2 xl:before:h-2 xl:before:bg-pallete-primary")}>
            {position === 1 && <img src="/static/img/first.svg" alt="primeiro lugar" className="h-24 w-auto" />}
            {position === 2 && <img src="/static/img/second.svg" alt="segundo lugar" className="h-24 w-auto" />}
            {position === 3 && <img src="/static/img/third.svg" alt="terceiro lugar" className="h-24 w-auto" />}
            <div className="flex flex-col gap-5 flex-1">
                <Text className="text-white text-left text-base md:text-2xl">{title}</Text>
                <Button className="text-xs md:text-base">
                    {t("home.winners.details")}
                </Button>
            </div>
        </div>
    )
}