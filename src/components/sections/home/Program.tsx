import { useTranslation } from "react-i18next";
import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { CardProgram } from "../../modules/CardProgram";
import { MdOutlineClass } from 'react-icons/md'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { VscRocket } from 'react-icons/vsc'

export function Program () {
    const { t } = useTranslation("common");

    return (

        <div className="flex relative overflow-hidden flex-col lg:grid lg:grid-cols-program lg:grid-rows-2 items-center px-8 lg:px-12 xl:px-36 xl:relative md:px-24 py-16 gap-14 lg:gap-0 xl:gap-y-8 lg:gap-x-12 xl:gap-x-24">
            <div className="absolute lg:left-[-480px] left-[-650px] w-[450px] h-[450px] mix-blend-normal bg-pallete-primary opacity-[0.1] shadow-blue-light" />
            <div className="absolute lg:shadow-transparent right-[-750px] w-[450px] h-[450px] mix-blend-normal bg-pallete-primary opacity-[0.1] shadow-blue-light" />
            <div className="flex overflow-hidden absolute w-full top-[-140px] h-auto sm:justify-between justify-center">
                <img src={'/static/img/greenelegantdots.svg'} className="lg:hidden top-[0] w-auto h-[462px] mix-blend-difference transform scale-x-[-1] z-[0]" alt="Elegant Dots" />
                <img src={'/static/img/greenelegantdots.svg'} className="lg:hidden w-auto h-[462px] right-[0px] mix-blend-difference" alt="Elegant Dots" />
            </div>
            <img src={'static/img/coconutstree.svg'} className=" absolute w-[335px] h-[537px] mix-blend-lighten left-[-38px] top-[100px] " />

            <div className="flex flex-col gap-11 items-center lg:items-start">
                <img src={'/static/img/greenelegantdots.svg'} className="hidden lg:block absolute top-[-150px] left-[-500px] transform scale-x-[-1] z-[0] w-[939px] h-[719px] right-[0px] mix-blend-difference" alt="Elegant Dots" />
                <img src={'/static/img/greenelegantdots.svg'} className="hidden lg:block absolute bottom-[-200px] left-0 transform scale-x-[-1] z-[0] w-auto h-[462px] right-[0px] mix-blend-difference" alt="Elegant Dots" />
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
            <div className="flex relative justify-center w-full lg:row-span-2">
                <img src="/static/img/program-tropical-island.svg" className="w-auto h-80 xl:w-[500px] lg:z-[1]" alt="Tropical Island" />
                <img src={'/static/img/greenelegantdots.svg'} className="absolute md:hidden lg:block lg:w-[538px] lg:h-[750px] w-[466px] lg:top-[-350px] lg: right-0 h-[392px] md:right-[-200px] right-[-150px] top-[-140px] z-0 mix-blend-difference" alt="Elegant Dots" />
            </div>
            <div className="flex flex-col sm:flex-row gap-10 mb-8">
                <CardProgram title={String(t("home.program.cards.workshop"))} icon={MdOutlineClass} />
                <CardProgram title={String(t("home.program.cards.lecture"))} icon={FaChalkboardTeacher} />
                <CardProgram title={String(t("home.program.cards.fair"))} icon={VscRocket} />
            </div>
        </div>
    )
}