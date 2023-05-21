import { useTranslation } from "react-i18next";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { CardProgram } from "../../modules/CardProgram";
import { MdOutlineClass } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'

export function Program() {
    const { t } = useTranslation("common");

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-program lg:grid-rows-2 items-center px-8 lg:px-12 xl:px-36 xl:relative md:px-24 py-16 gap-14 lg:gap-0 xl:gap-y-8 lg:gap-x-12 xl:gap-x-24">
            <div className="flex flex-col gap-11 items-center lg:items-start">  
                <Heading className="border-b-4 border-pallete-primary pb-4 w-fit" size="2xl">
                    {t("home.program.title")}
                </Heading>
                <Text className="text-base text-center lg:text-left">
                    {t("home.program.description1")}
                    <b className="text-pallete-primary">
                        {t("home.program.description2")}
                    </b>
                    {t("home.program.description3")}
                </Text>
            </div>
            <div className="flex justify-center w-full lg:row-span-2">
                <img src="/static/img/program-tropical-island.svg" className="w-auto h-80 xl:w-[500px]" alt="Tropical Island" />
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mb-8">
                <CardProgram title={String(t("home.program.cards.workshop"))} icon={MdOutlineClass} />
                <CardProgram title={String(t("home.program.cards.lecture"))} icon={FaChalkboardTeacher} />
                <CardProgram title={String(t("home.program.cards.fair"))} icon={VscRocket} />
            </div>
        </div>
    )
}