import type { IconType } from "react-icons"
import { Text } from "../elements/Text"
import { Button } from "../elements/Button"

type CardWinnerProps = {
    title: string,
    position: number,
    course: "BCC" | "ECOMP"
}

export function CardWinner({ title, position, course }: CardWinnerProps) {
    return (
        <div className="z-10 relative w-[330px] md:w-[450px] flex bg-pallete-background-blue gap-5 rounded-lg border-[1px] border-pallete-primary px-4 py-6 md:after:content-[''] md:after:absolute md:after:rounded-full md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:translate-x-[120%] md:after:w-2 md:after:h-2 md:after:bg-pallete-primary">
            {position === 1 && <img src="/static/img/first.svg" alt="primeiro lugar" className="h-24 w-auto" />}
            {position === 2 && <img src="/static/img/second.svg" alt="segundo lugar" className="h-24 w-auto" />}
            {position === 3 && <img src="/static/img/third.svg" alt="terceiro lugar" className="h-24 w-auto" />}
            <div className="flex flex-col gap-5 flex-1">
                <Text className="text-white text-left text-base md:text-2xl">{title}</Text>
                <Button className="text-xs md:text-base">
                    Ver detalhes
                </Button>
            </div>
        </div>
    )
}