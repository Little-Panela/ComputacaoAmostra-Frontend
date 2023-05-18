import { useTranslation } from "react-i18next";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { CardProgram } from "../../modules/CardProgram";
import { MdOutlineClass } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'
import Image from "next/image";

export function Program() {
    const { t } = useTranslation("common");

    return (
        <div className="grid grid-cols-2 grid-rows-2 justify-between items-center w-full pl-28 gap-y-10">
            <div className="flex flex-col gap-14">
                <Heading className="text-white border-b-4 border-pallete-secondary w-fit pb-3 box-border" size="2xl">
                    {t("home.program.title")}
                </Heading>
                <Text size="md" className="text-white">
                    {t("home.program.description1")}
                    <span className="text-pallete-primary">
                        {t("home.program.description2")}
                    </span>
                    {t("home.program.description3")}
                </Text>
            </div>
            <div className="row-start-1 row-end-3 col-start-2 col-end-3 flex justify-end">
                <Image src="/static/img/program-tropical-island.svg" height={400} width={500} alt="Tropical Island" />
            </div>
            <div className="flex gap-10">
                <CardProgram title={t("home.program.cards.workshop")} icon={MdOutlineClass} />
                <CardProgram title={t("home.program.cards.lecture")} icon={FaChalkboardTeacher} />
                <CardProgram title={t("home.program.cards.fair")} icon={VscRocket} />
            </div>
        </div>
    )
}