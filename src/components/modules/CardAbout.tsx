import { GrWorkshop } from 'react-icons/gr'
import { Text } from "../elements/Text"
import grWorkshop from '../../../public/static/icons/grWorkshop.svg'
import type { IconType } from 'react-icons';
import React, { createElement } from 'react';

type CardAboutProps = {
    children: React.ReactNode;
    icon: IconType;
}

export function CardAbout({children, icon}: CardAboutProps) {
    return(
        <div className={`flex items-center w-[240px] lg:w-full lg:max-h-[400px] min-h-[292px] flex-col bg-black/[0.7] rounded-[20px]
                        md:flex-row md:w-[550px] md:h-[auto] md:items-center md:justify-start md:bg-black/[0.5] md:pt-2 md:pb-2 md:box-border md:pl-3 md:min-h-[150px]`}>
                    <span className="flex rounded-full md:mt-0 mt-3 items-center justify-center border-white border-[3px] text-white w-[76px] h-[76px] md:w-24 md:h-24">
                        {createElement(icon, {size: 50, color: "#05E1FE", fill: "#05E1FE", stroke: '#05E1FE'})}
                    </span>
                    <div className='md:w-[80%] flex-1 md:text-left text-center box-border pt-[20px] md:pt-0 md:pl-9 pl-[10px] pr-[10px]'>
                        <Text className='font-normal text-base leading-7'>{children}</Text>
                    </div>
        </div>
    )
}