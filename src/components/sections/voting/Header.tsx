/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { Text } from "../../elements/Text";
import { TextInput } from "../../elements/TextInput";
import { SwitchCourse } from "../../modules/SwitchCourse";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  course: "bcc" | "ecomp";
  onChangeText: (value: string) => void;
}

export function Header({ course, onChangeText }: HeaderProps): JSX.Element {
  const { t } = useTranslation("common");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  };
  return (
    <header className="relative overflow-x-hidden mt-5 flex flex-col items-center pt-40 gap-20 md:gap-10">
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -left-96"/>
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -right-96"/>

      <img src="/static/img/video-right-tree.png" alt="Planta da direita" className="hidden md:block absolute h-[600px] xl:h-[800px] top-20 lg:top-48 right-0"/>
      <img src="/static/img/video-left-tree.png" alt="Planta da esquerda" className="hidden md:block  absolute h-[600px] xl:h-[800px] top-20 lg:top-48 left-0"/>
      
      <img src="/static/img/video-wave.png" alt="Onda da Direita" className="absolute h-[600px] xl:h-[800px] top-0 -right-20 opacity-20 rotate-[-135deg]"/>
      <img src="/static/img/video-wave.png" alt="Onda da Esquerda" className="absolute h-[600px] xl:h-[800px] -top-20 -left-20 opacity-20 -rotate-[270deg]"/>
      

      <div className="flex flex-col items-center w-10/12 xl:w-3/5 gap-10">
        <Heading className="text-2xl md:text-4xl w-10/12 text-center">
          {t("voting.header.projects")}
        </Heading>
        <Text className="text-xs text-gray-400 text-center md:text-lg">
          {t("voting.header.description")}
        </Text>
      </div>

      <SwitchCourse course={course} />

      <div className="flex flex-col items-center text-center gap-12 md:items-center w-10/12">
        <Heading className="w-10/12 text-lg md:text-2xl">
          {t("voting.gallery.heading.part1")}
          <span className="text-pallete-primary">
            {t("voting.gallery.heading.part2")}
          </span>
          {t("voting.gallery.heading.part3")}
        </Heading>
        <img src="/static/img/voting-trophy.svg" alt="Troféu" className="w-52 h-auto"/>
        <Text className="text-sm text-gray-400 md:text-lg">
          {course === "bcc" ? t("voting.gallery.subheading-bcc") : t("voting.gallery.subheading-ecomp")}
        </Text>
      </div>

      <div className="flex w-80 md:w-3/6">
        <TextInput.Root>
          <TextInput.Input
            id="projeto"
            placeholder={t("voting.header.searchPlaceholder") ?? ""}
            onChange={handleInputChange}
          />
          <TextInput.Icon>
            <MagnifyingGlassIcon />
          </TextInput.Icon>
        </TextInput.Root>
      </div>
    </header>
  );
}
