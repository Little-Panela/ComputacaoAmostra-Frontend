import { IconType } from "react-icons"
import { createElement } from "react"
import { Text } from "../elements/Text"

type CardProgramProps = {
    title: string,
    icon: IconType
}

export function CardProgram({ icon, title }: CardProgramProps) {
    return (
        <div className="flex flex-col gap-9 w-28">
            <span className="h-[76px] w-[76px] rounded-full border-2 border-white flex justify-center items-center">{createElement(icon, {size: 30, color: "#05E1FE", fill: "#05E1FE"})}</span>
            <Text className="text-white">{title}</Text>
        </div>
    )
}